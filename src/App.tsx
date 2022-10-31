import { Component } from "react";
import "./App.css";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { LoadingScreen } from "./components/LoadingScreen";
import { Filter, getTags } from "./components/Util/FilterGrid/Filter";

type AppState = {
	tags: Filter[];
	tagsRetrieved?: boolean;
};

class App extends Component<{}, AppState> {
	state: AppState = {
		tags: [],
	};

	async componentDidMount() {
		document.title = "Welcome to Leetcode Roulette | Apply Filters & Get Started Finding Problems!";
		const tags = await getTags();
		await new Promise<void>((resolve) => {
			setTimeout(() => {
				resolve();
			}, 2000);
		});
		this.setState({
			...this.state,
			tags,
			tagsRetrieved: true,
		});
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Content tags={this.state.tags}></Content>
			</div>
		);
	}
}

export default App;
