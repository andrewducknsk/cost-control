import styled from 'styled-components';

const HeaderStyled = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
`;

const TitleStyled = styled.h1`
	font-size: 24px;
`;

export default {
	Header: HeaderStyled,
	Title: TitleStyled,
};
