import { Minus, Plus } from '@phosphor-icons/react';
import { useState } from 'react';
import { QuantityInputContainer } from './QuantityInput.styles';

export function QuantityInput() {
	const [quantity, setQuantity] = useState(1);

	function handleDecrease() {
		if (quantity > 0) {
			setQuantity(prevCount => prevCount - 1);
		}
	}
	function handleIncrease() {
		if (quantity < 99) {
			setQuantity(prevCount => prevCount + 1);
		}
	}
	return (
		<QuantityInputContainer>
			<button onClick={handleDecrease}>
				<Minus size={14} />
			</button>
			<span>{quantity}</span>
			<button onClick={handleIncrease}>
				<Plus size={14} />
			</button>
		</QuantityInputContainer>
	);
}
