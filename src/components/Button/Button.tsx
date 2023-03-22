import { ButtonContainer } from './Button.styles';
interface ButtonProps {
	label: string;
}
export function Button(props: ButtonProps) {
	return <ButtonContainer>{props.label}</ButtonContainer>;
}
