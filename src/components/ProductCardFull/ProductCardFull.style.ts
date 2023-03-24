import styled from 'styled-components';

export const ProductCardFullContainer = styled.div`
	width: 256px;
	height: 310px;
	background-color: ${props => props.theme.colors.base.baseCard};
	border-radius: 6px 36px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: relative;

	#product {
		position: absolute;
		top: 112px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		align-items: center;
		justify-content: center;
	}

	#tags {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 0px;
		gap: 4px;
	}
	#tag {
		padding: 4px 8px;
		color: ${props => props.theme.colors.product.yellowDark};
		background-color: ${props => props.theme.colors.product.yellowLight};
		text-transform: uppercase;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-size: 10px;
		line-height: 130%;
		border-radius: 100px;
	}

	#info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 20px;
	}
	#description {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 130%;
		color: ${props => props.theme.colors.base.baseLabel};
		text-align: center;
	}
	#displayName {
		font-family: 'Baloo 2', sans-serif;
		font-weight: 700;
		font-size: 20px;
		line-height: 130%;
		color: ${props => props.theme.colors.base.baseSubtitle};
	}
	img {
		position: absolute;
		width: 120px;
		height: 120px;
		left: calc(50% - 120px / 2);
		top: -20px;
	}
	#cardFooter {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 29px;
		color: ${props => props.theme.colors.base.baseText};
		margin-top: 17px;

		div {
			display: flex;
			flex-direction: row;
			gap: 8px;
		}
		span {
			font-family: 'Roboto', sans-serif;
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 130%;
		}
		span > strong {
			font-family: 'Baloo 2', sans-serif;
			font-style: normal;
			font-weight: 800;
			font-size: 24px;
			line-height: 130%;
		}
	}
`;
