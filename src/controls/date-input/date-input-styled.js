import styled from 'styled-components';
import { BaseControlStyled } from '../base-control-styled';

const DateInputStyled = styled(BaseControlStyled('input'))`
	&::-webkit-calendar-picker-indicator {
		display: none;
	}

	&::-webkit-clear-button {
		display: none;
	}

	&::-webkit-inner-spin-button {
		display: none;
	}
`;

const DateInputIconButtonStyled = styled.button`
	position: absolute;
	top: 19px;
	right: 10px;
	display: inline-block;
	width: 20px;
	height: 20px;
	padding: 0;
	background: url("${props => props.iconUrl}");
	background-size: contain;
	border: none;
	cursor: pointer;
`;

export default {
	DateInput: DateInputStyled,
	IconButton: DateInputIconButtonStyled,
};
