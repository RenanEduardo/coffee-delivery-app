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
import { ProductCard } from './components/ProductCard/ProductCard';
import { ProductModel } from './models/Product';

export function App() {
	const product: ProductModel = {
		displayName: 'Expresso Tradicional',
		description: 'O tradicional café feito com água quente e grãos moídos',
		productImgSrc: 'Americano.png',
		listPrice: '9,99',
		tags: ['Tradicional'],
	};

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
					<Button label='Label' />
					<AddToCartButton />
					<RemoveButton />
					<ShoppingCartButton />
					<QuantityInput />
					<Select
						label='Cartão de Crédito'
						paymentMethod='CreditCard'
						defaultStateChecked={false}
					/>
					<Input placeholder='Text' isOptional />
				</div>
				<div>
					<ProductCard product={product} fullCard={false} />
				</div>
			</ThemeProvider>
		</>
	);
}
