import { useEffect, useState } from "react";
import { StyledTranslateCard } from "./TranslateCards.styled";
import { useTranslateContext } from "../contexts/TranslationContext";
import CardHeader from "./CardParts/CardHeader";
import CardMiddle from "./CardParts/CardMiddle";
import CardLower from "./CardParts/CardLower";

export default function TranslateCard({ type, setCopied }) {
	const [count, setCount] = useState(0);

	const {
		translatedText,
		translateText,
		setTranslateText,
		from,
		handleSwap,
		refetch,
		setTo,
		setFrom,
		error,
		isError,
		to,
		isLoading,
	} = useTranslateContext();

	useEffect(() => {
		setCount(translateText.length);
	}, [translateText]);

	const shared = {type,translateText,translatedText};

	return (
		<StyledTranslateCard primary={type === "to"}>
			<CardHeader
				type={type}
				from={from}
				handleSwap={handleSwap}
				refetch={refetch}
				setTo={setTo}
				setFrom={setFrom}
				to={to}
			/>
			<CardMiddle
				error={error}
				isError={isError}
				isLoading={isLoading}
				{...shared}
				setTranslateText={setTranslateText}
			/>
			<CardLower
				{...shared}
				count={count}
				setCopied={setCopied}
			/>
		</StyledTranslateCard>
	);
}
