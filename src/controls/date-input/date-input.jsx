import React, { memo } from 'react';
import Styled from './date-input-styled';
import calendarIcon from '../../icon/calendar-icon.svg';

const defaultProps = {
	value: '2017-06-01',
	showIcon: true,
	iconUrl: calendarIcon,
};

const DateInput = ({ name, onChangeControl, value, iconUrl }) => {
	const onChange = e => {
		const { value, name } = e.target;

		onChangeControl(value, name);
	};

	return (
		<>
			<Styled.IconButton iconUrl={iconUrl} />
			<Styled.DateInput name={name} type="date" value={value} onChange={onChange} />
		</>
	);
};

DateInput.defaultProps = defaultProps;

export default memo(DateInput);
