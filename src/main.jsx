import { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		{/* //hum iske ander saare content/pages add krenege taaki unke beech me route
		kr sake. */}
		<Router>
			<App />
		</Router>
	</StrictMode>
);
