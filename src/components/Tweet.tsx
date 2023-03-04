import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import "../tweet.css";

interface TweetProps {
	user: string;
	children: string;
}

export function Tweet() {
	return (
		<a href="#" className="tweet">
			<img
				src="https://avatars.githubusercontent.com/u/55026292?v=4"
				alt="pic profile"
			/>

			<div className="tweet-content">
				<div className="tweet-content-header">
					<span className="user-name">Claudio Tomas</span>
					<span>@claudi-tm</span>
				</div>

				<p>
					Acabei de migrar um projeto React GIGANTE de
					create-react-app para Vite e os resultados foram: <br />{" "}
					<br></br>✅ npm start: De 32s para 400ms (sim, demorava 30s){" "}
					<br /> ✅ npm build: De 120s para 22s <br /> <br /> Além
					disso, troquei do Yarn para o PNPM e o install das deps
					mudou de 24s para 8s 🔥
				</p>

				<div className="tweet-content-footer">
					<button type="button">
						<ChatCircle></ChatCircle>20
					</button>
					<button type="button">
						<ArrowsClockwise></ArrowsClockwise>
						20
					</button>

					<button type="button">
						<Heart></Heart>20
					</button>
				</div>
			</div>
		</a>
	);
}
