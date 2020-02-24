import React, { memo } from 'react';
import Styled from './number-input-styled';

interface INumberInputProps {
  readonly name: string;
  readonly onChangeControl: (value: string, name: string) => void;
  readonly status: string;
  readonly value?: string;
  readonly placeholder?: string;
}

const NumberInput: React.FC<INumberInputProps> = ({
  name,
  onChangeControl,
  value = '',
  status,
  placeholder = '',
}): JSX.Element => {
  const isError: boolean = status === 'error';

  const onChange: (e: React.ChangeEvent<HTMLInputElement>) => void = e => {
    const { value, name }: { value: string; name: string } = e.target;

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
