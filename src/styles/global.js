import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background: ${({ theme }) => theme.COLORS.DARK_400};

        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea {
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
        outline: none;
    }

    button {
        font-size: 1.6rem;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        transition: filter 0.2s;
    }
    
    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;