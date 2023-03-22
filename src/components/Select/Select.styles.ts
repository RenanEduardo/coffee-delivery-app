import styled, { css } from 'styled-components';

export const SelectContainer = styled.div.attrs(
	(props: { checked: boolean }) => props
)`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 12px;
	padding: 16px;
	cursor: pointer;
	background-color: ${props =>
		props.checked
			? props.theme.colors.product.lightPurple
			: props.theme.colors.base.baseButton};
	border-radius: 6px;
	${props =>
		props.checked &&
		css`
			border: 1px solid ${props => props.theme.colors.product.purple};
		`}

	label {
		text-transform: uppercase;
		font-family: 'Roboto', sans-serif;
		font-size: 12px;
		line-height: 160%;
	}

	input {
		display: none;
	}

	svg {
		color: ${props => props.theme.colors.product.purple};
	}
`;
