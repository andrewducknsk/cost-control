import React, { memo, useState } from 'react';
import Styled from './date-input-styled';
import calendarIcon from '../../icon/calendar-icon.svg';
import Calendar from '../../calendar';

const defaultProps = {
	value: '2017-06-01',
	showIcon: true,
	iconUrl: calendarIcon,
};

const DateInput = ({ name, onChangeControl, value, iconUrl }) => {
	const [showCalendar, setShowCalendar] = useState(false);
	const onChange = e => {
		const { value, name } = e.target;

		onChangeControl(value, name);
	};

	const toggleShowCalendar = () => setShowCalendar(!showCalendar);

	return (
		<>
			<Styled.IconButton iconUrl={iconUrl} onClick={toggleShowCalendar} type="button" />
			<Calendar />
			<Styled.DateInput name={name} type="date" value={value} onChange={onChange} />
		</>
	);
};

DateInput.defaultProps = defaultProps;

export default memo(DateInput);
