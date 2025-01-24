import styled from 'styled-components';

export const AppContainer = styled.div`
	position: relative;
	
	/* To Fit all the window size */
	position: fixed;
	top: 0;
	left: 0;
	height: 100dvh;
	width: 100%;

	/* adjust bg options */
	background-repeat: no-repeat;
	background-size: contain;
	background-position: top;
	z-index: 1;

	/* adjust bg image for large and small devices */
	@media (max-width: 599px) {
		background-image: url("./resources/hero_img-sm.jpg");
		background-size: 250%;
		background-position: top;
	}
	@media (min-width: 600px) {
		background-image: url("./resources/hero_img.jpg");
	}

	/* make gradient in the background */
	&::before{
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
		@media (max-width: 599px) {
			background-image: linear-gradient(to top,var(--primary-color) 60%,transparent);
		}
		@media (min-width: 600px) {
			background-image: linear-gradient(to top,var(--primary-color) 50%,transparent 90%);
		}
	}
`

export const AppGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 10px;
	width: 90%;
	position: relative;
	z-index: 2;
	height: 100dvh;
	padding-block: 20px;
	margin-inline: auto;
	@media (max-width: 499px) {
		width:95%;
	}
`