import styled from 'styled-components';

export const ButtonContainer = styled.button`
	background-color: ${props => props.theme.colors.product.yellow};
	border: none;
	border-radius: 6px;
	width: 132px;
	height: 46px;
	padding: 12px 8px;
	color: ${props => props.theme.colors.base.white};
	text-transform: uppercase;
	font-family: 'Roboto', sans-serif;
	font-style: normal;
	font-size: 14px;
	font-weight: 700;
	line-height: 160%;

	&:hover {
		background-color: ${props => props.theme.colors.product.yellowDark};
	}
`;
