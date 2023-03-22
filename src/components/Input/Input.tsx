import { useEffect, useState } from 'react';
import { InputContainer } from './Input.styles';

interface InputProps {
	placeholder?: string;
	isOptional?: boolean;
}
export function Input({ placeholder = '', isOptional = false }: InputProps) {
	const [text, setText] = useState('');
	const [hasOptionalLabel, setHasOptionalLabel] = useState(isOptional);
	useEffect(() => {
		if (text !== '') {
			setHasOptionalLabel(false);
		} else if (isOptional && text === '') {
			setHasOptionalLabel(true);
		}
	}, [text, isOptional]);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setText(event.target.value);
	}
	return (
		<InputContainer>
			<input
				type='text'
				placeholder={placeholder}
				value={text}
				onChange={handleChange}
			/>
			{hasOptionalLabel && <p>Opcional</p>}
		</InputContainer>
	);
}
