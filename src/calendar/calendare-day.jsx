import React, { memo } from 'react';

const CalendarDay = ({ onClick, day }) => {
	const onClickDay = () => onClick(day);

	return (
		<div onClick={onClickDay} style={{ display: 'inline-block', margin: '0 10px' }}>
			{day}
		</div>
	);
};

export default memo(CalendarDay);
