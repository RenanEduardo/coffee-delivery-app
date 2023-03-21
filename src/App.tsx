import { ThemeProvider } from 'styled-components';
import { AddToCartButton } from './components/AddToCartButton/AddToCartButton';
import { Button } from './components/Button/Button';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/GlobalStyle.styles';
export function App() {
	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyle />
				<Button />
				<AddToCartButton />
			</ThemeProvider>
		</>
	);
}
