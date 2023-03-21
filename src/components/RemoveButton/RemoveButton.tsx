import { RemoveButtonContainer } from './RemoveButton.styles';
import { Trash } from '@phosphor-icons/react';
export function RemoveButton() {
	return (
		<RemoveButtonContainer>
			<Trash size={22} />
			Remover
		</RemoveButtonContainer>
	);
}
