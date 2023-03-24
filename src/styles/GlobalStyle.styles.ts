import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
 padding: 0;
	margin: 0;
	-webkit-font-smoothing: antialiased;
	background-color: ${props => props.theme.colors.base.background};
}
`;
