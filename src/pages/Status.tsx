import { Header } from "../components/Header";
import { Tweet } from "../components/Tweet";
import "../styles/status.css"

const answers = ["Parabens", "show", "Maravilha"]

export function Status() {
    return (
		<main className="status">
			<Header title="Tweet"></Header>

			<Tweet content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex obcaecati natus debitis vel expedita animi optio quod impedit quibusdam adipisci quidem labore minus sit hic, quae provident voluptas! Qui, facilis."></Tweet>
			<div className="separator"></div>
			<form className="answer-tweet-form">
				<label htmlFor="tweet">
					<img
						src="https://avatars.githubusercontent.com/u/55026292?v=4"
						alt="profile tweet"
					/>
					<textarea
						id="tweet"
						placeholder="Tweet your answer"
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