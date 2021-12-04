import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        breakpoint: {
            mobile: string;
        }
    }
}