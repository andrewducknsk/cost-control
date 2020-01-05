import styled from 'styled-components';

export const BaseControlStyled = tag => styled(tag)`
	width: 100%;
	margin-top: -8px;
	padding: 8px 10px;
	font-size: 16px;
	line-height: 1.2;
	border: 1px solid black;
	border-radius: 5px;
	outline: none;
	transition: border-color ease 0.2s;

	&::placeholder {
		color: gray;
	}

	&:hover {
		border-color: mediumpurple;
	}

	&:focus {
		border-color: purple;
	}
`;
