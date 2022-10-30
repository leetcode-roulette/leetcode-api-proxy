import React, { Component } from "react";
import "./App.css";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
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
		document.title = "Welcome to Leetcode Roulette | Apply filters and get started finding problems!";
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
				{ this.state.tagsRetrieved ? <Content tags={this.state.tags}></Content> : <></>}
			</div>
		);
	}
}

export default App;
