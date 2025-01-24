import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { BtnwithIcon, Stack } from "../TranslateCards.styled";
import { IF } from "../misc";

const notify = () => toast.success("Text copied successfully!");

const CountStyle = {
	alignSelf: "flex-end",
	color: "var(--background-color)",
	fontSize: "0.8rem",
};

export default function CardLower(
	{ type, setCopied, translatedText, translateText, count },
) {
	const copyText = (type === "from" && translateText) ? translateText : (type === "to" && translatedText) ? translatedText : " "; 
	return (
		<Stack alignitems="center" justifycontent="space-between">
			<Stack alignitems="center" gap="10px">
				<CopyToClipboard
					text={copyText}
				>
					<BtnwithIcon
						onClick={() => {
							notify();
							setCopied(true);
						}}
					>
						<img src="./resources/Copy.svg" alt="copy" />
					</BtnwithIcon>
				</CopyToClipboard>
			</Stack>
			<IF exp={type === "from"}>
				<p
					style={CountStyle}
				>
					{count}/570
				</p>
			</IF>
		</Stack>
	);
}
