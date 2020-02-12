import styled from 'styled-components';
import { openAnimation, closeAnimation } from '../base-stylesheets/animation';

// TODO: any types
interface ICalendarProps {
  readonly ref?: any;
  readonly onClick?: any;
  readonly type?: boolean;
}

interface IButtonProps {
  readonly left?: boolean;
  readonly type: string;
}

const CalendarStyled = styled.div<ICalendarProps>`
	//animation-name: ${props => (props.type ? openAnimation : closeAnimation)};
	//animation-fill-mode: forwards;
	//animation-duration: 0.15s;
	position: absolute;
	top: 48px;
	right: 0;
	z-index: 5;
	max-width: 280px;
	min-height: 252px;
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

const CalendarMonthStyled = styled.div`
  margin-top: 15px;
`;

const CalendarWeekStyled = styled.div`
  display: flex;
  margin-top: 5px;
`;

const CalendarDayStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &:hover {
    border: 1px solid rgba(147, 112, 219, 0.5);
  }
`;

const CalendarButtonStyled = styled.button<IButtonProps>`
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
  Month: CalendarMonthStyled,
  Week: CalendarWeekStyled,
  Day: CalendarDayStyled,
  Button: CalendarButtonStyled,
};
