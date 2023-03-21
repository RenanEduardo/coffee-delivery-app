import styled from 'styled-components';

export const RemoveButtonContainer = styled.button`
	border: none;
	border-radius: 6px;
	padding: 0 8px;
	height: 32px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	text-transform: uppercase;
	gap: 4px;
	font-family: 'Roboto', sans-serif;
	font-weight: normal;
	font-size: 12px;
	line-height: 160%;
	color: ${props => props.theme.colors.base.baseText};
	background-color: ${props => props.theme.colors.base.baseButton};
	&:hover {
		background-color: ${props => props.theme.colors.base.baseHover};
		color: ${props => props.theme.colors.base.baseSubtitle};

		svg {
			color: ${props => props.theme.colors.product.purpleDark};
		}
	}

	svg {
		color: ${props => props.theme.colors.product.purple};
	}
`;
