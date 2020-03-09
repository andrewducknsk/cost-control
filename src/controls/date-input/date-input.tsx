import React, { memo, useState } from 'react';
import Styled from './date-input-styled';
import Calendar from '../../calendar';
import { ICalendarReturnType } from '../../calendar/calendar';
import { Icons } from '../../icon';

interface IDateInputProps {
  readonly name: string;
  readonly status: string;
  readonly onChangeControl: (value: string | undefined, name: string) => void;
  readonly value?: string;
  readonly placeholder?: string;
  readonly showIcon?: boolean;
  readonly iconUrl?: string;
}

interface IEventTarget {
  readonly value: string;
  readonly name: string;
}

type TransformDateType = [string, string, string];

const DEFAULT_PLACEHOLDER = 'дд.мм.гггг';

const DateInput: React.FC<IDateInputProps> = ({
  name = '',
  status,
  onChangeControl,
  value,
  placeholder = DEFAULT_PLACEHOLDER,
  showIcon = true,
  iconUrl = Icons.calendar,
}): JSX.Element => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const getTransformedDate: (date: ICalendarReturnType) => string = date => {
    const transformDate: TransformDateType = Object.keys(date).reduce(
      (acc, item: string): TransformDateType => {
        if (item !== 'year' && date[item] < 10) {
          acc.push(`0${date[item]}`);
        } else {
          acc.push(String(date[item]));
        }

        return acc;
      },
      ([] as unknown) as TransformDateType
    );

    return transformDate.join('.');
  };

  const getDateCalendar: (date: ICalendarReturnType) => void = date => {
    onChangeControl(getTransformedDate(date), name);
  };

  //TODO: Добавить маску
  const getDateInput: (e: React.ChangeEvent<HTMLInputElement>) => void = e => {
    const { value, name }: IEventTarget = e.target;

    onChangeControl(value, name);
  };

  const toggleShowCalendar: () => void = () => setShowCalendar(!showCalendar);

  // TODO: сделать возможность переиспользовать TextInput
  return (
    <>
      {showIcon && <Styled.IconButton icon={iconUrl} onClick={toggleShowCalendar} type="button" />}
      {showCalendar && <Calendar onChange={getDateCalendar} onClose={toggleShowCalendar} />}
      <Styled.DateInput
        name={name}
        status={status}
        value={value}
        onChange={getDateInput}
        placeholder={placeholder}
      />
    </>
  );
};

export default memo(DateInput);
