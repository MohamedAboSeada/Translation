import React, { useEffect, useState } from "react";
import { AppContainer, AppGrid } from "./style/App.style.js";
import TranslateCard from "./components/TranslateCards.jsx";
import { TranslateProvider } from "./contexts/TranslationContext.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

const QC = new QueryClient();

export default function App() {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		setTimeout(() => setCopied(false), 1000);
	}, [copied]);

	return (
		<QueryClientProvider client={QC}>
			<TranslateProvider>
				<AppContainer></AppContainer>
				<AppGrid>
					<TranslateCard setCopied={setCopied} type="from" />
					<TranslateCard setCopied={setCopied} type="to" />
				</AppGrid>
				<Toaster

					toastOptions={{
						style: {
							backgroundColor: "var(--header-color)",
							color: "var(--background-color)",
							fontWeight: "600"
						},
					}}
				/>
			</TranslateProvider>
		</QueryClientProvider>
	);
}
