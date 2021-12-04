import { ThemeProvider, DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
breakpoint: {
mobile: '1200px'
}
};

const Theme: React.FC = ({ children }) => {
return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;