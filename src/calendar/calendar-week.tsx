import React, { memo } from 'react';
import CalendarDay from './calendar-day';
import Styled from './calendar-styled';

interface ICalendarWeekArguments {
  readonly onClickDay: (day: number) => void;
  readonly days: Array<number>;
}

const CalendarWeek: React.FC<ICalendarWeekArguments> = ({ onClickDay, days }): JSX.Element => {
  const renderDays: () => Array<JSX.Element> = () =>
    days.map(day => <CalendarDay day={day} onClickDay={onClickDay} key={day} />);

  return <Styled.Week>{renderDays()}</Styled.Week>;
};

export default memo(CalendarWeek);
