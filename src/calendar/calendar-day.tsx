import React, { memo } from 'react';
import Styled from './calendar-styled';

interface ICalendarDayArguments {
  readonly onClickDay: (day: number) => void;
  readonly day: number;
}

const CalendarDay = ({ onClickDay, day }: ICalendarDayArguments): JSX.Element => {
  const onChoiceDay = () => onClickDay(day);

  return <Styled.Day onClick={onChoiceDay}>{day}</Styled.Day>;
};

export default memo(CalendarDay);
