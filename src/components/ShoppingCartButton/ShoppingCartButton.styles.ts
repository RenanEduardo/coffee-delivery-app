import styled from 'styled-components';

export const ShoppingCartButtonContainer = styled.button`
	padding: 8px;
	border: none;
	border-radius: 6px;
	color: ${props => props.theme.colors.product.yellowDark};
	background-color: ${props => props.theme.colors.product.yellowLight};
	cursor: pointer;
`;
