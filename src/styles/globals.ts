import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   :root{
    --gradient: linear-gradient(180deg, #FD391E 20%, #FF553E 80%);
    
    --primary: #FD391E;
    --secondary: #CA0125;
    
    --title: #35323D;
    --paragraph: #737284;
    
    --white: #FFFFFF;
    --gray-50: #F1F1F1;
    --gray-100: #C0C0C0;
    }
    
    ::-webkit-scrollbar {
        width: 1rem;
    }
    ::-webkit-scrollbar-track {
        background: var(--gray-50);
    }
    ::-webkit-scrollbar-thumb {
        background: var(--gray-100);
        border-radius: .25rem;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1024px) {
            font-size: 93.75%; //15px
        }
        @media(max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        background: var(--white);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-weight: 700;
    }

    ul, li {
        list-style: none;
        font-weight: 500;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
    }
    
    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
  
`;
