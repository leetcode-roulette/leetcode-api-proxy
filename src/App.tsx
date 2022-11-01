import { FC, PropsWithChildren, useEffect, useState } from "react";
import "./App.css";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Filter, getTags } from "./components/Util/FilterGrid/Filter";

const App: FC<PropsWithChildren> = () => {
	const [tags, setTags] = useState<Array<Filter>>([]);
	document.title = "Welcome to Leetcode Roulette | Apply Filters & Get Started Finding Problems!";
	useEffect(() => {
		const fetchData = async () => setTags(await getTags());
		fetchData();
	}, []);

	return (
		<div className="App">
			<Header />
			<Content tags={tags}></Content>
		</div>
	)
}

export default App;
