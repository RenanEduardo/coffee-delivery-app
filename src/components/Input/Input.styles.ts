import styled from 'styled-components';

export const InputContainer = styled.div`
	position: relative;
	p {
		margin: 0;
		position: absolute;
		top: 15px;
		right: 5%;
		font-family: 'Roboto', sans-serif;
		font-size: 12px;
		font-style: italic;
		font-weight: 400;
		line-height: 130%;
		color: ${props => props.theme.colors.base.baseLabel};
	}

	input {
		background-color: ${props => props.theme.colors.base.baseInput};
		border: 1px solid ${props => props.theme.colors.base.baseButton};
		&:focus {
			outline: 1px solid ${props => props.theme.colors.product.yellowDark};
		}
		border-radius: 4px;
		padding: 12px;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 4px;
		min-width: 350px;
		border: none;
		font-family: 'Roboto', sans-serif;
		font-size: 14px;
		font-weight: 400;
		line-height: 160%;
		color: ${props => props.theme.colors.base.baseText};
		outline: none;
	}
`;
