import styled from 'styled-components';
import { Button } from '../controls';

const TitleStyled = styled.h3`
	font-size: 14px;
`;

const ButtonStyled = styled(Button)`
	width: 80px;
	height: 25px;
	font-size: 14px;
`;

export default {
	Button: ButtonStyled,
	Title: TitleStyled,
};
