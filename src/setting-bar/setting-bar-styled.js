import styled from 'styled-components';
import Styled from '../controls/button/button-styled';

const FilterTitleStyled = styled.h3`
	font-size: 14px;
`;

const FilterButtonStyled = styled(Styled.Button)`
	width: 80px;
	height: 25px;
	font-size: 14px;
`;

export default {
	FilterButton: FilterButtonStyled,
	FilterTitle: FilterTitleStyled,
};
