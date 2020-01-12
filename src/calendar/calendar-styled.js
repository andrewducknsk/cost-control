import styled from 'styled-components';
import { openAnimation, closeAnimation } from '../base-stylesheets/animation';

const CalendarStyled = styled.div`
	//animation-name: ${props => (props.type ? openAnimation : closeAnimation)};
	//animation-fill-mode: forwards;
	//animation-duration: 0.15s;
	position: absolute;
	top: 48px;
	right: 0;
	z-index: 5;
	width: 250px;
	padding: 20px;
	background: white;
	border: 1px solid rebeccapurple;
	border-radius: 5px;
	box-shadow: 0 2px 10px -2px black;
`;

const CalendarHeaderStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const CalendarDateTitleStyled = styled.div`
	width: 135px;
	text-align: center;
`;

const CalendarDaysStyled = styled.div`
	//display: flex;
	//flex-wrap: wrap;
	margin-top: 15px;
`;

const CalendarButtonStyled = styled.button`
	position: relative;
	width: 30px;
	height: 25px;
	padding: 0;
	background: transparent;
	border: none;
	cursor: pointer;

	&:after {
		content: '';
		position: absolute;
		${props => (props.left ? 'left: 4px' : 'right: 4px')};
		top: 50%;
		display: inline-block;
		width: 10px;
		height: 10px;
		margin-top: -5px;
		border-left: 1px solid rebeccapurple;
		border-bottom: 1px solid rebeccapurple;
		transform: ${props => (props.left ? 'rotate(45deg)' : 'rotate(-135deg)')};
	}

	&:before {
		content: '';
		position: absolute;
		top: 50%;
		${props => (props.left ? 'left: 4px' : 'right: 4px')};
		display: inline-block;
		width: 20px;
		height: 1px;
		background: rebeccapurple;
	}
`;

export default {
	Calendar: CalendarStyled,
	Header: CalendarHeaderStyled,
	DateTitle: CalendarDateTitleStyled,
	Days: CalendarDaysStyled,
	Button: CalendarButtonStyled,
};
