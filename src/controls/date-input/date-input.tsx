import React, { memo, SyntheticEvent, useState } from 'react';
import Styled from './date-input-styled';
import calendarIcon from '../../icon/calendar-icon.svg';
import Calendar from '../../calendar';

interface IDateInputArguments {
  readonly name: string;
  readonly onChangeControl: (value: string, name: string) => void;
  readonly value: string;
  readonly status: string;
  readonly iconUrl: string;
  readonly showIcon: boolean;
}

const DateInput = ({
  name,
  onChangeControl,
  value,
  status,
  iconUrl = calendarIcon,
  showIcon = true,
}: IDateInputArguments): JSX.Element => {
  const [showCalendar, setShowCalendar] = useState(false);
  const isError: boolean = status === 'error';

  const getDateCalendar = (date: string): void => {
    onChangeControl(date, name);
  };

  const getDateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;

    onChangeControl(value, name);
  };

  const toggleShowCalendar = (): void => setShowCalendar(!showCalendar);

  return (
    <>
      {showIcon && (
        <Styled.IconButton iconUrl={iconUrl} onClick={toggleShowCalendar} type="button" />
      )}
      {showCalendar && <Calendar onChange={getDateCalendar} onClose={toggleShowCalendar} />}
      <Styled.DateInput
        name={name}
        type="date"
        status={isError}
        value={value}
        onChange={getDateInput}
      />
    </>
  );
};

export default memo(DateInput);
