import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import Styled from './calendar-styled';
import CalendarWeek from './calendar-week';

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
	const date = new Date();
	const [year, setYear] = useState(date.getFullYear());
	const [month, setMonth] = useState(date.getMonth() + 1);
	const calendarElement = useRef(null);

	const getDaysOfMonth = () => {
		const daysInMonth = new Date(year, month, 0).getDate();

		return [...new Array(daysInMonth)].map((day, index) => index + 1);
	};

	const transformMonthToWeeks = () =>
		getDaysOfMonth().reduce((accumulator, currentDay) => {
			const weekIndex = Math.ceil(currentDay / 7);

			if (!accumulator[weekIndex]) {
				accumulator[weekIndex] = [];
			}

			accumulator[weekIndex] = [...accumulator[weekIndex], currentDay];

			return accumulator;
		}, {});

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

	const transformDate = day => {
		const currentDate = { day, month, year };

		if (currentDate.day < 10) {
			currentDate.day = `0${currentDate.day}`;
		}

		if (currentDate.month < 10) {
			currentDate.month = `0${currentDate.month}`;
		}

		return `${currentDate.year}-${currentDate.month}-${currentDate.day}`;
	};

	const onChoiceDate = day => {
		const a = transformDate(day);

		onChange(a);
		onClose();
	};

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

	const renderWeeks = () => {
		const weeks = transformMonthToWeeks();
		const weeksKeys = Object.keys(weeks);

		return weeksKeys.map(weekIndex => (
			<CalendarWeek days={weeks[weekIndex]} onClickDay={onChoiceDate} key={weekIndex} />
		));
	};

	return (
		<Styled.Calendar onClick={onClickCalendar} ref={calendarElement}>
			<Styled.Header>
				<Styled.Button left onClick={onPrevMonth} />
				<Styled.DateTitle>{`${monthName[month]} ${year}`}</Styled.DateTitle>
				<Styled.Button onClick={onNextMonth} />
			</Styled.Header>
			<Styled.Month>{renderWeeks()}</Styled.Month>
		</Styled.Calendar>
	);
};

export default memo(Calendar);
