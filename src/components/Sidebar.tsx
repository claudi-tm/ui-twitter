import {
	Bell,
	BookmarkSimple,
	DotsThreeCircle,
	EnvelopeSimple,
	FileText,
	Hash,
	House,
	Pencil,
	User,
} from "phosphor-react";
import { NavLink } from "react-router-dom";
import twitterLogo from "../assets/Logo.svg";
import "../styles/sidebar.css";

export function Sidebar() {
	return (
		<aside className="sidebar">
			<img className="logo" src={twitterLogo} alt="logo" />
			<nav className="main-navigation">
				<NavLink to={"/"}>
					<House size={32} weight="fill" /> <span>Home</span>
				</NavLink>
				<a href="">
					<Hash size={32} color="#0d0c0c" />
					<span>Explore</span>
				</a>
				<a href="">
					<Bell size={32} color="#0d0c0c" /> <span>Notifications</span>
				</a>
				<a href="">
					<EnvelopeSimple size={32} color="#0d0c0c" /> <span>Messages</span>
				</a>
				<a href="">
					<BookmarkSimple size={32} color="#0d0c0c" /> <span>Bookmarks</span>
				</a>
				<a href="">
					<FileText size={32} color="#0d0c0c" />
					<span>Lists</span>
				</a>
				<a href="">
					<User size={32} color="#0d0c0c" />
					<span>Profile</span>
				</a>
				<a href="">
					<DotsThreeCircle size={32} color="#0d0c0c" />
					<span>More</span>
				</a>
			</nav>
			<button className="new-tweet" type="button">
				<Pencil></Pencil>
				<span>Tweet</span>
			</button>
		</aside>
	);
}
