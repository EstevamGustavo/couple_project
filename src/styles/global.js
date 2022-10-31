import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
     background: #2c2c2c;
     color: #f7f7f7;
     font: 400 16px sans-serif;
     overflow: hidden;
    }
    
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    button {
        cursor: pointer;
    }

    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

`;
