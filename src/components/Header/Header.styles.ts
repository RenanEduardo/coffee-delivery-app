import styled from 'styled-components';
import { ShoppingCartButtonContainer } from '../ShoppingCartButton/ShoppingCartButton.styles';

export const HeaderContainer = styled.header`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 32px 160px;
	gap: 820px;

	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 12px;
	}

	${ShoppingCartButtonContainer} {
		height: 38px;
	}

	#location {
		background-color: ${props => props.theme.colors.product.lightPurple};
		border-radius: 6px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 8px;
		gap: 4px;
		font-family: 'Roboto', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 130%;
		svg,
		span {
			color: ${props => props.theme.colors.product.purple};
		}
	}
`;
