import {
	Bell,
	BookmarkSimple,
	DotsThreeCircle,
	EnvelopeSimple,
	FileText,
	Hash,
	House,
	User,
} from "phosphor-react";
import { NavLink } from "react-router-dom";
import twitterLogo from "../assets/Logo.svg";
import "../styles/sidebar.css"

export function Sidebar() {
	return (
		<aside className="sidebar">
			<img className="logo" src={twitterLogo} alt="logo" />
			<nav className="main-navigation">
				<NavLink to={"/"}>
					<House size={32} weight="fill" /> Home
				</NavLink>
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
	);
}
