import { FC, PropsWithChildren, useEffect, useState } from "react";
import "./App.css";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { ProblemModal } from "./components/ProblemModal";
import { Filter, getTags } from "./components/Util/FilterGrid/Filter";
import ModalProvider from "./context/ModalProvider";

const App: FC<PropsWithChildren> = () => {
	const [tags, setTags] = useState<Array<Filter>>([]);
	document.title = "Welcome to Leetcode Roulette | Apply Filters & Get Started Finding Problems!";
	useEffect(() => {
		getTags().then((tags) => {
			setTags(tags);
		});
	}, []);

	return (
		<div className="App">
			<ModalProvider>
				<Header />
				<Content tags={tags}></Content>
				<ProblemModal />
			</ModalProvider>
		</div>
	);
};

export default App;
