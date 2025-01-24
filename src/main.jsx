import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./style/Global.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<GlobalStyle />
		<App />
	</StrictMode>
);
