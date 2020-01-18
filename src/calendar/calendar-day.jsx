import React, { memo } from 'react';
import Styled from './calendar-styled';

const CalendarDay = ({ onClickDay, day }) => {
	const onChoiceDay = () => onClickDay(day);

	return <Styled.Day onClick={onChoiceDay}>{day}</Styled.Day>;
};

export default memo(CalendarDay);
