import { FC, PropsWithChildren, createContext, useContext, useState } from "react";
const ModalContext = createContext(false);
const ModalOpenContext = createContext<Function>(() => {});

export const useModal = () => {
	return useContext(ModalContext);
};
export const useToggleModalOpen = () => {
	return useContext(ModalOpenContext);
};

const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
	const [open, setOpen] = useState(false);

	function toggleOpen() {
		setOpen(!open);
	}

	return (
		<ModalContext.Provider value={open}>
			<ModalOpenContext.Provider value={toggleOpen}>{children}</ModalOpenContext.Provider>
		</ModalContext.Provider>
	);
};

export default ModalProvider;
