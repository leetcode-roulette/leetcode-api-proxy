import { FC, PropsWithChildren, createContext, useContext, useState } from "react";

const ModalContext = createContext(false);
const ModalOpenContext = createContext<Function>(() => {});

export const useModalContext = (): [boolean, Function] => {
	const state = useContext(ModalContext);
	const dispatch = useContext(ModalOpenContext);
	return [state, dispatch];
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
