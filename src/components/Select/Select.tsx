import { Bank, CreditCard, Money } from '@phosphor-icons/react';
import { InputHTMLAttributes, SyntheticEvent, useState } from 'react';
import { SelectContainer } from './Select.styles';

interface SelectPropTypes {
	paymentMethod: string;
	label: string;
	defaultStateChecked: boolean;
}
export function Select(props: SelectPropTypes) {
	const { paymentMethod, label, defaultStateChecked } = props;
	const [checked, setChecked] = useState(defaultStateChecked);

	function renderIcon() {
		switch (paymentMethod) {
			case 'CreditCard':
				return <CreditCard size={16} />;
			case 'DebitCard':
				return <Bank size={16} />;
			default:
				return <Money size={16} />;
		}
	}

	function handleCheck(event: React.ChangeEvent<HTMLInputElement>) {
		setChecked(() => {
			return event.target.checked;
		});
	}
	return (
		<SelectContainer checked={checked}>
			<input
				onChange={handleCheck}
				type='radio'
				name='selectGroup'
				id='selectGroupRadio1'
				checked={checked}
			></input>
			{renderIcon()}
			<label htmlFor='selectGroupRadio1'>
				<span>{label}</span>
			</label>
			{/* <input
				type='radio'
				name='selectGroup'
				id='selectGroupRadio2'
			></input>
			<label htmlFor='selectGroupRadio2'>
				<Bank size={16} />
				<span>Cartão de Débito</span>
			</label>
			<input
				type='radio'
				name='selectGroup'
				id='selectGroupRadio3'
			></input>
			<label htmlFor='selectGroupRadio3'>
				<Money size={16} />
				<span>Dinheiro</span>
			</label> */}
		</SelectContainer>
	);
}
