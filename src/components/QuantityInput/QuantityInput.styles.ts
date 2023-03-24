import styled from 'styled-components';

export const QuantityInputContainer = styled.div`
	border: none;
	border-radius: 6px;
	background-color: ${props => props.theme.colors.base.baseButton};
	max-height: 38px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 4px;
	padding: 3px;
	width: 72px;

	button {
		border: none;
		background-color: ${props => props.theme.colors.base.baseButton};
	}
	span {
		font-family: 'Roboto', sans-serif;
		font-size: 1rem;
		font-weight: 400;
		line-height: 160%;
		color: ${props => props.theme.colors.base.baseTitle};
	}
	svg {
		color: ${props => props.theme.colors.product.purple};

		&:hover {
			color: ${props => props.theme.colors.product.purpleDark};
		}
	}
`;
