import { FormEvent, KeyboardEvent, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { Header } from "../components/Header";
import { router } from "../components/routes";
import { Tweet } from "../components/Tweet";
import "../styles/timeline.css";

export function Timeline() {
	const [newTweet, setNewTweet] = useState("");
	const [tweets, setTweets] = useState([
		"Meu primeiro tweet",
		"Teste",
		"Deu certo twittar",
	]);

	function createNewTweet(event: FormEvent) {
		event.preventDefault();

		setTweets([newTweet, ...tweets]);
		setNewTweet("");
	}

	function handleHotKeySubmit(event: KeyboardEvent) {
		if (event.key === "Enter" && event.ctrlKey) {
			setTweets([newTweet, ...tweets]);
			setNewTweet("");
		}
	}

	return (
		<main className="timeline">
			<Header title="Home"></Header>

			<form onSubmit={createNewTweet} className="new-tweet-form">
				<label htmlFor="tweet">
					<img
						src="https://avatars.githubusercontent.com/u/55026292?v=4"
						alt="profile tweet"
					/>
					<textarea
						id="tweet"
						placeholder="What's happening?"
						value={newTweet}
						onKeyDown={handleHotKeySubmit}
						onChange={(event) => {
							setNewTweet(event.target.value);
						}}
					></textarea>
				</label>
				<button type="submit">Tweet</button>
			</form>
			<div className="separator"></div>
			{tweets.map((tweet) => {
				return <Tweet key={tweet} content={tweet}></Tweet>;
			})}
		</main>
	);
}
