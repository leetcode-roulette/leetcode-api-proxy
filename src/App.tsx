import React, { Component } from "react";
import "./App.css";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Filter, getTags } from "./components/Util/FilterGrid/Filter";

type AppProps = {}

type AppState = {
	tags: Array<Filter>;
}

class App extends Component<AppProps, AppState> {
	state: AppState = {
		tags: []
	}

	async componentDidMount() {
		document.title = "Welcome to Leetcode Roulette | Apply Filters & Get Started Finding Problems!";
		this.setState({
			tags: await getTags()
		});
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Content tags={this.state.tags || []}></Content>
			</div>
		);
	}
}

export default App;
