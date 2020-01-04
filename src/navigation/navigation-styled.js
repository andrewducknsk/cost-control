import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationStyled = styled.nav``;

export const ListStyled = styled.ul`
	display: flex;
	font-size: 16px;
`;

export const LinkStyled = styled(Link)`
	padding: 5px 15px;
	color: black;

	&:hover {
		background: aquamarine;
	}
`;
