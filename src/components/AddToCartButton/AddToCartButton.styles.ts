import styled from 'styled-components';

export const AddToCartButtonContainer = styled.button`
	padding: 8px;
	border: none;
	border-radius: 6px;
	color: ${props => props.theme.colors.base.white};
	background-color: ${props => props.theme.colors.product.purpleDark};

	&:hover {
		background-color: ${props => props.theme.colors.product.purple};
	}
`;
