import React from "react";
import ReactDOM from "react-dom/client";
import { Tweet } from "./components/Tweet";
import "./styles/global.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

const tweets = ["Meu primeiro tweet", "Teste", "Deu certo twittar"];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<div className="layout">
			<Sidebar></Sidebar>
			<div className="content">
				<main className="timeline">
					<Header title="Home"></Header>
					<form className="new-tweet-form">
						<label htmlFor="tweet">
							<img
								src="https://avatars.githubusercontent.com/u/55026292?v=4"
								alt="profile tweet"
							/>
							<textarea
								id="tweet"
								placeholder="What's happening?"
							></textarea>
						</label>
						<button type="submit">Tweet</button>
					</form>
					<div className="separator"></div>
					{tweets.map((tweet) => {
						return <Tweet key={tweet} content={tweet}></Tweet>;
					})}
				</main>
			</div>
		</div>
	</React.StrictMode>
);
