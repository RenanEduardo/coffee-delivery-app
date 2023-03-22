import { ShoppingCartButtonContainer } from './ShoppingCartButton.styles';
import { ShoppingCart } from '@phosphor-icons/react';
export function ShoppingCartButton() {
	return (
		<ShoppingCartButtonContainer>
			<ShoppingCart size={22} weight='fill' />
		</ShoppingCartButtonContainer>
	);
}
