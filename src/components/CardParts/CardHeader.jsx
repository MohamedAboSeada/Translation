import { useState, useEffect } from "react";
import { BtnwithIcon, HeaderBtn, Stack } from "../TranslateCards.styled";
import Laguages from "../../assets/Langs.json";
import HeaderSelect from "./HeaderSelect";
import { IF } from "../misc";

const StackStyle = {
	borderBottom: "2px solid var(--header-color)",
	height: "60px",
};

export default function CardHeader({
	type,
	from,
	setTo,
	setFrom,
	refetch,
	to,
	handleSwap,
}) {
	const handleChange = (option, typeText) => {
		const langCode = option.value;
		if (typeText === "from") {
			setFrom(langCode);
		} else if (typeText === "to") {
			setTo(langCode);
		}
		setSelectedOption(option);
		refetch();
	};

	const LangCodeType = type === "from" ? from : to;

	return (
		<Stack
			style={StackStyle}
			alignitems="center"
			justifycontent="space-between"
		>
			<Stack alignitems="center" gap="10px">
				{Laguages.slice(0, 2).map((btn) => (
					<HeaderBtn
						key={btn.value}
						onClick={() => handleChange({ value: btn.value }, type)}
						className={btn.value === LangCodeType ? "active" : ""}
					>
						{btn.label}
					</HeaderBtn>
				))}
				<HeaderSelect
					from={from}
					to={to}
					handleChange={handleChange}
					options={Laguages}
					type={type}
				/>
			</Stack>
			<IF exp={type === "to"}>
				<BtnwithIcon onClick={handleSwap}>
					<img
						src="./resources/Horizontal_top_left_main.svg"
						alt="swap languages"
					/>
				</BtnwithIcon>
			</IF>
		</Stack>
	);
}
