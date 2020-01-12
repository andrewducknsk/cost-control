import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import Styled from './calendar-styled';
import CalendarDay from './calendare-day';

const monthName = {
	1: 'Январь',
	2: 'Февраль',
	3: 'Март',
	4: 'Апрель',
	5: 'Май',
	6: 'Июнь',
	7: 'Июль',
	8: 'Август',
	9: 'Сентябрь',
	10: 'Октябрь',
	11: 'Ноябрь',
	12: 'Декабрь',
};

const Calendar = ({ onChange, onClose }) => {
	// TODO: много new Date()
	// TODO: анимировать так же как и попап (сдлеать хук)
	// TODO: закрытие по аут клику в хук
	// TODO: рендеринг дней по неделям
	const [year, setYear] = useState(new Date().getFullYear());
	const [month, setMonth] = useState(new Date().getMonth() + 1);
	const calendarElement = useRef(null);

	const getDaysOfMonth = () => {
		const days = [];
		const daysInMonth = new Date(year, month, 0).getDate();

		for (let i = 1; i <= daysInMonth; i++) {
			days.push(i);
		}
		return days;
	};

	const onClickCalendar = e => e.preventDefault();

	const onPrevMonth = useCallback(() => {
		if (month === 1) {
			setYear(year - 1);
			setMonth(12);
			return;
		}
		setMonth(month - 1);
	}, [year, month]);

	const onNextMonth = useCallback(() => {
		if (month === 12) {
			setYear(year + 1);
			setMonth(1);
			return;
		}
		setMonth(month + 1);
	}, [year, month]);

	const scrollCalendar = useCallback(
		e => {
			if (e.deltaY < 0) {
				onNextMonth();
			} else {
				onPrevMonth();
			}
		},
		[onNextMonth, onPrevMonth]
	);

	const onChoiceDate = day => {};

	const closeCalendar = useCallback(
		e => {
			const isClickOutCalendar = e.path.every(item => item !== calendarElement.current);
			if (isClickOutCalendar) {
				onClose();
			}
		},
		[onClose]
	);

	useEffect(() => {
		const calendarElem = calendarElement.current;

		calendarElem.addEventListener('wheel', scrollCalendar);
		document.addEventListener('click', closeCalendar);

		return () => {
			calendarElem.removeEventListener('wheel', scrollCalendar);
			document.removeEventListener('click', closeCalendar);
		};
	}, [scrollCalendar, closeCalendar]);

	const renderDays = () =>
		getDaysOfMonth().map(day => <CalendarDay onClick={onChoiceDate} day={day} key={day} />);

	return (
		<Styled.Calendar onClick={onClickCalendar} ref={calendarElement}>
			<Styled.Header>
				<Styled.Button left onClick={onPrevMonth} />
				<Styled.DateTitle>{`${monthName[month]} ${year}`}</Styled.DateTitle>
				<Styled.Button onClick={onNextMonth} />
			</Styled.Header>
			<Styled.Days>{renderDays()}</Styled.Days>
		</Styled.Calendar>
	);
};

export default memo(Calendar);
