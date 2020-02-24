import React, { memo, useState } from 'react';
import Styled from './date-input-styled';
import calendarIcon from '../../icon/calendar-icon.svg';
import Calendar from '../../calendar';

interface IDateInputProps {
  readonly name: string;
  readonly onChangeControl: (value: string, name: string) => void;
  readonly value: string;
  readonly status: string;
  readonly showIcon?: boolean;
  readonly iconUrl?: string;
  readonly placeholder?: string;
}

const DateInput: React.FC<IDateInputProps> = ({
  name,
  onChangeControl,
  value,
  status,
  iconUrl = calendarIcon,
  showIcon = true,
}): JSX.Element => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const isError: boolean = status === 'error';

  const getDateCalendar: (date: string) => void = date => {
    onChangeControl(date, name);
  };

  const getDateInput: (e: React.ChangeEvent<HTMLInputElement>) => void = e => {
    const { value }: { value: string } = e.target;

    onChangeControl(value, name);
  };

  const toggleShowCalendar: () => void = () => setShowCalendar(!showCalendar);

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
