import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import Styled from './calendar-styled';
import CalendarWeek from './calendar-week';

interface ICalendarProps {
  readonly onChange: (data: ICalendarReturnType) => void;
  readonly onClose: () => void;
}

interface IMonthName {
  readonly [key: string]: string;
}

interface IWeeks {
  [key: string]: Array<number>;
}

export interface ICalendarReturnType {
  [key: string]: number;
  // readonly day: number;
  // readonly month: number;
  // readonly year: number;
}

const monthName: IMonthName = {
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

const Calendar: React.FC<ICalendarProps> = ({ onChange, onClose }): JSX.Element => {
  // TODO: анимировать так же как и попап (сдлеать хук)
  // TODO: закрытие по аут клику в хук
  const date: Date = new Date();
  const [year, setYear] = useState<number>(date.getFullYear());
  const [month, setMonth] = useState<number>(date.getMonth() + 1);
  const calendarElement = useRef<HTMLDivElement>(null!);

  const getDaysOfMonth: () => Array<number> = () => {
    const daysInMonth: number = new Date(year, month, 0).getDate();

    return [...new Array(daysInMonth)].map((day, index: number) => index + 1);
  };

  const transformMonthToWeeks: () => IWeeks = () =>
    getDaysOfMonth().reduce((acc, currentDay: number): IWeeks => {
      const weekIndex: number = Math.ceil(currentDay / 7);

      if (!acc[weekIndex]) {
        acc[weekIndex] = [];
      }

      acc[weekIndex] = [...acc[weekIndex], currentDay];

      return acc;
    }, {} as IWeeks);

  const onClickCalendar: (e: React.SyntheticEvent) => void = e => e.preventDefault();

  const onPrevMonth: () => void = useCallback(() => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
      return;
    }
    setMonth(month - 1);
  }, [year, month]);

  const onNextMonth: () => void = useCallback(() => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
      return;
    }
    setMonth(month + 1);
  }, [year, month]);

  const scrollCalendar: (e: React.WheelEvent<HTMLDivElement>) => void = useCallback(
    e => {
      if (e.deltaY < 0) {
        onNextMonth();
      } else {
        onPrevMonth();
      }
    },
    [onNextMonth, onPrevMonth]
  );

  const onChoiceDate: (day: number) => void = day => {
    const date: ICalendarReturnType = { day, month, year };
    onChange(date);
    onClose();
  };

  const closeCalendar = useCallback(
    // TODO: указать тип event-a
    e => {
      // @ts-ignore
      const isClickOutCalendar = e.path.every((item: string) => item !== calendarElement.current);
      if (isClickOutCalendar) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    // TODO: ref type in initial
    const calendarElem: HTMLDivElement = calendarElement.current;

    // @ts-ignore
    calendarElem.addEventListener('wheel', scrollCalendar);
    document.addEventListener('click', closeCalendar);

    return () => {
      // @ts-ignore
      calendarElem.removeEventListener('wheel', scrollCalendar);
      document.removeEventListener('click', closeCalendar);
    };
  }, [scrollCalendar, closeCalendar]);

  const renderWeeks: () => Array<JSX.Element> = () => {
    const weeks: IWeeks = transformMonthToWeeks();
    const weeksKeys: Array<string> = Object.keys(weeks);

    return weeksKeys.map(
      (weekIndex: string): JSX.Element => (
        <CalendarWeek days={weeks[weekIndex]} onClickDay={onChoiceDate} key={weekIndex} />
      )
    );
  };

  return (
    <Styled.Calendar onClick={onClickCalendar} ref={calendarElement}>
      <Styled.Header>
        <Styled.Button left onClick={onPrevMonth} type="button" />
        <Styled.DateTitle>{`${monthName[month]} ${year}`}</Styled.DateTitle>
        <Styled.Button onClick={onNextMonth} type="button" />
      </Styled.Header>
      <Styled.Month>{renderWeeks()}</Styled.Month>
    </Styled.Calendar>
  );
};

export default memo(Calendar);
