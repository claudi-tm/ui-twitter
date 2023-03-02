import React from "react";
import ReactDOM from "react-dom/client";
import { Tweet } from "./components/Tweet";
import "./global.css"
import twitterLogo from "./assets/Logo.svg"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<div className="layout">
			<aside className="sidebar">
				<img className="logo" src={twitterLogo} alt="logo" />
				<nav></nav>
				<button className="new-tweet" type="button">Tweet</button>
			</aside>
			<div className="content">content</div>
		</div>
	</React.StrictMode>
);
