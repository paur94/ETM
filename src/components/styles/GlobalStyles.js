import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html, body {
        max-width: 100%;
        overflow-x: hidden;
        font-family: "Nunito Sans", Sans-serif;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Nunito Sans", Sans-serif;
    }

    .FooterCopyright .FooterLink {
        margin-right: 130px;
        color: #fff;
    }
    .FooterCopyright {
       background-color: #38586e
    }
`
