import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";

import { Sidebar } from "./components/Sidebar";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/routes";
import { HashRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		
		<RouterProvider router={router} />
	</React.StrictMode>
);
