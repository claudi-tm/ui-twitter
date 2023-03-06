import { Outlet, RouterProvider } from "react-router-dom";
import { router } from "../components/Routes";
import { Sidebar } from "../components/Sidebar";

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
