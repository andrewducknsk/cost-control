import React, { memo, useState } from 'react';
import Styled from './date-input-styled';
import calendarIcon from '../../icon/calendar-icon.svg';
import Calendar from '../../calendar';

const defaultProps = {
	showIcon: true,
	iconUrl: calendarIcon,
};

const DateInput = ({ name, onChangeControl, value, status, iconUrl }) => {
	const [showCalendar, setShowCalendar] = useState(false);
	const isError = status === 'error';

	const getDateCalendar = date => {
		onChangeControl(date, name);
	};

	const getDateInput = e => {
		const { value } = e.target;

		onChangeControl(value, name);
	};

	const toggleShowCalendar = () => setShowCalendar(!showCalendar);

	return (
		<>
			<Styled.IconButton iconUrl={iconUrl} onClick={toggleShowCalendar} type="button" />
			{showCalendar && <Calendar onChange={getDateCalendar} onClose={toggleShowCalendar} />}
			<Styled.DateInput name={name} type="date" status={isError} value={value} onChange={getDateInput} />
		</>
	);
};

DateInput.defaultProps = defaultProps;

export default memo(DateInput);
