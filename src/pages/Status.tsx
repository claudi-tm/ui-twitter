import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Tweet } from "../components/Tweet";
import "../styles/status.css";

export function Status() {
	const [new_answer, set_new_answer] = useState("");
	const [answers, set_answers] = useState(["Parabens", "show", "Maravilha"]);
	function createNewAnswer(event: FormEvent) {
		event.preventDefault();
		set_answers([new_answer, ...answers]);
		set_new_answer("");
	}

	function handleHotKeySubmit(event: KeyboardEvent) {
		if (event.key === "Enter" && event.ctrlKey) {
			set_answers([new_answer, ...answers]);
			set_new_answer("");
		}
	}

	return (
		<main className="status">
			<Header title="Tweet"></Header>

			<Tweet content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex obcaecati natus debitis vel expedita animi optio quod impedit quibusdam adipisci quidem labore minus sit hic, quae provident voluptas! Qui, facilis."></Tweet>
			<div className="separator"></div>
			<form onSubmit={createNewAnswer} className="answer-tweet-form">
				<label htmlFor="tweet">
					<img
						src="https://avatars.githubusercontent.com/u/55026292?v=4"
						alt="profile tweet"
					/>
					<textarea
						id="tweet"
						placeholder="Tweet your answer"
						value={new_answer}
						onKeyDown={handleHotKeySubmit}
						onChange={(event) => {
							set_new_answer(event.target.value);
						}}
					></textarea>
				</label>
				<button type="submit">Answer</button>
			</form>

			{answers.map((answer) => {
				return <Tweet key={answer} content={answer}></Tweet>;
			})}
		</main>
	);
}
