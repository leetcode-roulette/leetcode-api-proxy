import { FC } from "react";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { ProblemModal } from "./components/ProblemModal";
import ModalProvider from "./context/ModalProvider";
import AppProvider from "./context/AppProvider";

import "./App.css";

const App: FC = () => {
	document.title = "Welcome to Leetcode Roulette | Apply Filters & Get Started Finding Problems!";

	return (
		<div className="App">
			<AppProvider>
				<ModalProvider>
					<Header />
					<Content></Content>
					<ProblemModal />
				</ModalProvider>
			</AppProvider>
		</div>
	);
};

export default App;
