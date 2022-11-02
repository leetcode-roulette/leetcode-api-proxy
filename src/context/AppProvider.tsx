import { FC, PropsWithChildren } from "react";
import { TagProvider, ModalProvider, FilterProvider, BreakpointProvider } from ".";


const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<TagProvider>
				<ModalProvider>
					<FilterProvider>
						<BreakpointProvider>
							{ children }
						</BreakpointProvider>
					</FilterProvider>
				</ModalProvider>
			</TagProvider>
		</>
	);
};

export default AppProvider;
