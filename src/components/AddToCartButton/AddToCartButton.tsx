import { AddToCartButtonContainer } from './AddToCartButton.styles';
import { ShoppingCartSimple } from '@phosphor-icons/react';
export function AddToCartButton() {
	return (
		<AddToCartButtonContainer>
			<ShoppingCartSimple size={22} weight='fill' />
		</AddToCartButtonContainer>
	);
}
