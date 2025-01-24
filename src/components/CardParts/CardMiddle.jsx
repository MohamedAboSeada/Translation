import { TestRTL } from "../../util/util";
import { IF, IFELSE } from "../misc";
import { Stack, TextArea, TranslatedText } from "../TranslateCards.styled";

const StackStyle = {
	height: "210px",
	paddingBlock: "15px",
};

export default function CardMiddle(
	{
		type,
		isLoading,
		isError,
		translateText,
		setTranslateText,
		translatedText,
		error,
	},
) {
	return (
		<Stack
			style={StackStyle}
			direction="column"
			gap="10px"
		>
			<IF exp={type === "from"}>
				<TextArea
					value={translateText}
					onChange={(e) => setTranslateText(e.target.value)}
					maxLength={570}
					className={TestRTL(translateText) ? "rtl" : "ltr"}
					placeholder="Give me something to translate"
				/>
			</IF>
			<IF exp={type === "to"}>
				<IFELSE
					exp={!isLoading}
					fallback={
						<TranslatedText>
							Translating...
						</TranslatedText>
					}
				>
					<IFELSE
						exp={!isError}
						fallback={
							<TranslatedText>
								{error?.message ||
									"Translation failed!"}
							</TranslatedText>
						}
					>
						<TranslatedText
							className={TestRTL(
									translatedText,
								)
								? "rtl"
								: "ltr"}
						>
							{translatedText || ""}
						</TranslatedText>
					</IFELSE>
				</IFELSE>
			</IF>
		</Stack>
	);
}
