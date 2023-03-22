import { ThemeProvider } from 'styled-components';
import { AddToCartButton } from './components/AddToCartButton/AddToCartButton';
import { Button } from './components/Button/Button';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/GlobalStyle.styles';
import { RemoveButton } from './components/RemoveButton/RemoveButton';
import { ShoppingCartButton } from './components/ShoppingCartButton/ShoppingCartButton';
import { QuantityInput } from './components/QuantityInput/QuantityInput';
export function App() {
	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyle />
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
						gap: '8px',
					}}
				>
					<Button />
					<AddToCartButton />
					<RemoveButton />
					<ShoppingCartButton />
					<QuantityInput />
				</div>
			</ThemeProvider>
		</>
	);
}
