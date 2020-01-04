import styled from 'styled-components';

export const BaseControlStyled = tag => styled(tag)`
	width: 100%;
	padding: 8px 10px;
	font-size: 16px;
	line-height: 1.2;
	border: 1px solid black;
	border-radius: 5px;
	outline: none;

	&::placeholder {
		color: gray;
	}

	&:hover {
		border-color: blue;
	}
`;
