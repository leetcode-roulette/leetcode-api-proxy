import { FC } from "react";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { ProblemModal } from "./components/ProblemModal";
import AppProvider from "./context";

import "./App.css";

const App: FC = () => {
	document.title = "Welcome to Leetcode Roulette | Apply Filters & Get Started Finding Problems!";

	return (
		<div className="App">
			<AppProvider>
					<Header />
					<Content></Content>
					<ProblemModal />
			</AppProvider>
		</div>
	);
};

export default App;
