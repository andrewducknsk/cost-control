import styled from 'styled-components';
import { BaseControlStyled, ErrorControlStyled } from '../base-control-styled';

interface IDateInput {
  readonly status: boolean;
}

interface IIconButton {
  readonly icon: string;
  readonly type: string;
}

const DateInputStyled = styled(BaseControlStyled('input'))<IDateInput>`
  ${props => (props.status ? ErrorControlStyled : '')};
`;

const DateInputIconButtonStyled = styled.button<IIconButton>`
	position: absolute;
	top: 19px;
	right: 10px;
	display: inline-block;
	width: 20px;
	height: 20px;
	padding: 0;
	background: url("${props => props.icon}") center no-repeat;
	background-size: contain;
	border: none;
	cursor: pointer;
`;

export default {
  DateInput: DateInputStyled,
  IconButton: DateInputIconButtonStyled,
};
