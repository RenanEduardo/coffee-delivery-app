import { ThemeProvider } from 'styled-components';
import { AddToCartButton } from './components/AddToCartButton/AddToCartButton';
import { Button } from './components/Button/Button';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/GlobalStyle.styles';
import { RemoveButton } from './components/RemoveButton/RemoveButton';
import { ShoppingCartButton } from './components/ShoppingCartButton/ShoppingCartButton';
import { QuantityInput } from './components/QuantityInput/QuantityInput';
import { Select } from './components/Select/Select';
import { Input } from './components/Input/Input';
import { ProductCardSmall } from './components/ProductCardSmall/ProductCardSmall';
import { ProductCardFull } from './components/ProductCardFull/ProductCardFull';
import { ProductModel } from './models/Product';
import { Home } from './pages/home/Home';

export function App() {
	const product: ProductModel = {
		displayName: 'Expresso Tradicional',
		description: 'O tradicional café feito com água quente e grãos moídos',
		productImgSrc: 'Americano.png',
		listPrice: '9,99',
		tags: ['Tradicional', 'Quente'],
	};

	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyle />
				<Home />
			</ThemeProvider>
		</>
	);
}
