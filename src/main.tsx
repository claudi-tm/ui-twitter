import React from "react";
import ReactDOM from "react-dom/client";
import { Tweet } from "./components/Tweet";
import "./global.css";
import twitterLogo from "./assets/Logo.svg";
import { Bell, BookmarkSimple, DotsThreeCircle, EnvelopeSimple, FileText, Hash, House, User } from "phosphor-react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<div className="layout">
			<aside className="sidebar">
				<img className="logo" src={twitterLogo} alt="logo" />
				<nav className="main-navigation">
					<a href="" className="active">
						<House size={32} weight="fill" /> Home
					</a>
					<a href="">
						<Hash size={32} color="#0d0c0c" />
						Explore
					</a>
					<a href="">
						<Bell size={32} color="#0d0c0c" /> Notifications
					</a>
					<a href="">
						<EnvelopeSimple size={32} color="#0d0c0c" /> Messages
					</a>
					<a href="">
						<BookmarkSimple size={32} color="#0d0c0c" /> Bookmarks
					</a>
					<a href="">
						<FileText size={32} color="#0d0c0c" />
						Lists
					</a>
					<a href="">
						<User size={32} color="#0d0c0c" />
						Profile
					</a>
					<a href="">
						<DotsThreeCircle size={32} color="#0d0c0c" />
						More
					</a>
				</nav>
				<button className="new-tweet" type="button">
					Tweet
				</button>
			</aside>
			<div className="content">content</div>
		</div>
	</React.StrictMode>
);
