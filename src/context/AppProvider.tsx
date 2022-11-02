import { FC, PropsWithChildren } from "react";
import TagProvider from "./TagProvider";
import ModalProvider from "./ModalProvider";
import FilterProvider from "./FilterProvider";


const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<TagProvider>
				<ModalProvider>
					<FilterProvider>
						{ children }
					</FilterProvider>
				</ModalProvider>
			</TagProvider>
		</>
	);
};

export default AppProvider;
