import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./views/home";
import LearnMorePeople  from "./views/learnMorePeople";
import LearnMoreLocation  from "./views/learnMoreLocation";
import injectContext from "./store/appContext";

import Navbar  from "./component/navbar";
import  Footer  from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/learnMorePeople/:id">
							<LearnMorePeople />
						</Route>
						<Route path="/learnMoreLocation/:id">
							<LearnMoreLocation />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
