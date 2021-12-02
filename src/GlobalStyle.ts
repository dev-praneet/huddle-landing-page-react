import { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 16px;
        --purple: hsl(257, 40%, 49%);
    }

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;