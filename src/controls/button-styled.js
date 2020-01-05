import styled from 'styled-components';

const ButtonStyled = styled.button`
	width: 200px;
	height: 40px;
	font-size: 20px;
	line-height: 1.2;
	color: white;
	background: rebeccapurple;
	border-radius: 25px;
	border: none;
	cursor: pointer;
	outline: none;
	transition: background ease 0.2s;

	&:hover {
		background: mediumpurple;
	}
`;

export default {
	Button: ButtonStyled,
};
