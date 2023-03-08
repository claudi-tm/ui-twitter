import { Outlet, RouterProvider } from "react-router-dom";
import { router } from "../components/routes";
import { Sidebar } from "../components/Sidebar";
import "../styles/default.css";

export function Default() {
	return (
		<div className="layout">
			<Sidebar></Sidebar>
			<div className="content">
				<Outlet></Outlet>
			</div>
		</div>
	);
}
