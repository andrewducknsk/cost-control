import React, { memo } from 'react';
import Styled from './number-input-styled';

interface INumberInputArguments {
  readonly name: string;
  readonly onChangeControl: (value: string, name: string) => void;
  readonly value: string;
  readonly status: string;
  readonly placeholder: string;
}

const NumberInput = ({
  name,
  onChangeControl,
  value = '',
  status,
  placeholder = '',
}: INumberInputArguments): JSX.Element => {
  const isError = status === 'error';

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (Number(value) < 0) {
      return;
    }

    onChangeControl(value, name);
  };

  return (
    <Styled.NumberInput
      status={isError}
      name={name}
      type="number"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default memo(NumberInput);
