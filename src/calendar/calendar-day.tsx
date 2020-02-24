import React, { memo } from 'react';
import Styled from './calendar-styled';

interface ICalendarDayProps {
  readonly onClickDay: (day: number) => void;
  readonly day: number;
}

const CalendarDay: React.FC<ICalendarDayProps> = ({ onClickDay, day }): JSX.Element => {
  const onChoiceDay: () => void = () => onClickDay(day);

  return <Styled.Day onClick={onChoiceDay}>{day}</Styled.Day>;
};

export default memo(CalendarDay);
