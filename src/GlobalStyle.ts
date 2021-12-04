import { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 16px;
        --purple: hsl(257, 40%, 49%);
        --magenta: hsl(300, 69%, 71%);
    }

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .footer-svg {
        height: 25px;
        width: 25px;
        color: white;
        transition-property: color;
        transition-duration: 300ms;

        :hover {
            cursor: pointer;
            color: var(--magenta);
        }
    }

    .hero-svg {
        width: 100%;
        height: 100%;
        // max-width: 700px;
    }

`;