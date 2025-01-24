import styled,{css} from "styled-components";

const StyledTranslateCard = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr auto;	
	background-color: ${(props) =>
	props.primary ? "var(--overlay-color-light)" : "var(--overlay-color-dark)"};
	backdrop-filter: blur(10px);
	border-radius: 10px;
	border: 2px solid var(--header-color);
	padding-inline: 15px;
	padding-block: 5px 15px;
	height:50%;
	@media (max-width: 500px) {
		height: 100%;
	}
`;

const Stack = styled.div`
	display: flex;
	align-items: ${(props) =>
	props.alignitems ? props.alignitems : "flex-start"};
	justify-content: ${(props) =>
	props.justifycontent ? props.justifycontent : "flex-start"};
	flex-direction: ${(props) => props.direction ? props.direction : "row"};
	gap: ${(props) => props.gap ? props.gap : "0px"};
`;

const CommonBtn = css`
	transition: 300ms ease;
	border-radius: 5px;
`

const BtnwithIcon = styled.button`
	${CommonBtn}
	display: grid;
	place-items: center;
	width: 40px;
	height: 40px;
	border: 3px solid var(--header-color);
	& > img{
		width: 100%;
		object-fit: contain;
	}
`;


const HeaderBtn = styled.button`
	${CommonBtn}
	color: var(--background-color);
	padding: 8px 10px;
	font-weight: 600;
	font-size: 1rem;
	&.dropdown{
		display: flex;
		align-items: center;
		justify-content:center;
		gap: 5px;
	}
	&.active{
		background-color: var(--header-color);
	}

	&:hover{
		background-color: var(--header-color);
	}
	&:disabled{
		color: var(--header-color);
		background-color: transparent !important;
	}
`;

const CommonStyles = css`
	font-size: var(--fluid-20-26);
	color: var(--background-color);
	font-weight: 600;
	width: 100%;
	height: 100%;
	overflow: auto;
	font-family: inherit;
	&.rtl{
		direction: rtl;
	}
	&.ltr{
		direction: ltr;
	}
	&::-webkit-scrollbar{
		appearance: none;
		width: 10px;
	}
	&::-webkit-scrollbar-thumb{
		background-color: var(--header-color);
		border-radius: 20px;
	}
`
const TextArea = styled.textarea`
	${CommonStyles}
	border: none;
	outline: none;
	background-color: transparent;
	resize: none;
	&::placeholder{
		color: var(--border-color);
	}
`;

const TranslatedText = styled.div`
	${CommonStyles}
`;

export {
	BtnwithIcon,
	HeaderBtn,
	Stack,
	StyledTranslateCard,
	TextArea,
	TranslatedText,
};
