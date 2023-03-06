import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from "react-router-dom";
import "../tweet.css";

interface TweetProps {
	content: string;
}

export function Tweet(props: TweetProps) {
	return (
		<Link to={"/status"} className="tweet">
			<img
				src="https://avatars.githubusercontent.com/u/55026292?v=4"
				alt="pic profile"
			/>

			<div className="tweet-content">
				<div className="tweet-content-header">
					<span className="user-name">Claudio Tomas</span>
					<span>@claudi-tm</span>
				</div>

				<p>{props.content}</p>

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
		</Link>
	);
}
