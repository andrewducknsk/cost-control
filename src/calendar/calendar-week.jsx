import React, { memo } from 'react';
import CalendarDay from './calendar-day';
import Styled from './calendar-styled';

const CalendarWeek = ({ days, onClickDay }) => {
	const renderDays = () => days.map(day => <CalendarDay day={day} onClickDay={onClickDay} key={day} />);

	return <Styled.Week>{renderDays()}</Styled.Week>;
};

export default memo(CalendarWeek);
