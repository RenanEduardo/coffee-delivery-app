import styled from 'styled-components';

export const ProductCardContainer = styled.div`
	max-width: 368px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
	padding: 8px 4px;
	background-color: ${props => props.theme.colors.base.baseCard};

	img {
		width: 64px;
		height: 64px;
	}

	span {
		font-family: 'Roboto', sans-serif;
		font-size: 16px;
		line-height: 130%;
		font-weight: 400;
		color: ${props => props.theme.colors.base.baseSubtitle};
	}

	strong {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 130%;
		color: ${props => props.theme.colors.base.baseText};
	}
	#product,
	#actions {
		display: flex;
		flex-direction: row;
	}

	#product {
		gap: 20px;
	}
	#actions {
		gap: 8px;
	}

	#details {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
`;
