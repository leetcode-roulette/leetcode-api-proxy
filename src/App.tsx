import React, { Component } from "react";
import "./App.css";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { LoadingScreen } from "./components/LoadingScreen";
import { Filter, getTags } from "./components/Util/FilterGrid/Filter";

type AppState = {
	tags: Array<Filter>;
	tagsRetrieved?: boolean;
}

class App extends Component {
	state: AppState = {
		tags: []
	};

	async componentDidMount() {
		document.title = "Welcome to Leetcode Roulette | Apply Filters & Get Started Finding Problems!";
		this.state.tags = await getTags();
		this.setState(state => ({
			...state,
			tagsRetrieved: true
		}));
	}

	render() {
		return (
			<div className="App">
				<Header />
				{ this.state.tagsRetrieved ? <Content tags={this.state.tags}></Content> : <LoadingScreen/>}
			</div>
		);
	}
}

export default App;
