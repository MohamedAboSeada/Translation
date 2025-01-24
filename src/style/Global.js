import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --text-color: #4D5562;
        --background-color: #F9FAFB;
        --border-color: #D2D5DA;
        --header-color: #394150;
        --primary-color: #040711;
        --link-color: #263FA9;
        --link-hover-color: #7CA9F3;
        --overlay-color-light: #121826CC;
        --overlay-color-dark: #212936CC;
      --fluid-20-26: clamp(1.25rem, 1.0956rem + 0.5882vw, 1.625rem);
    }
    body{
        font-family: "DM Sans","IBM Plex Sans Arabic", serif;
    }
    *{
        margin: 0;
        box-sizing: border-box;
    }
    button{
        border: none;
        outline: none;
        background-color: transparent;
        font-family: inherit;
        cursor: pointer;
        user-select: none;
    }
`;
