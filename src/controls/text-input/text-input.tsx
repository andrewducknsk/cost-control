import React, { memo } from 'react';
import Styled from './text-input-styled';

// TODO: пройтись про контролам и сделать одинаковый порядок пропсов
interface ITextInputProps {
  readonly name: string;
  readonly onChangeControl: (value: string, name: string) => void;
  readonly value: string;
  readonly status: string;
  readonly placeholder: string;
}

const TextInput: React.FC<ITextInputProps> = ({
  name,
  onChangeControl,
  value = '',
  status,
  placeholder = '',
}): JSX.Element => {
  const isError: boolean = status === 'error';

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;

    onChangeControl(value, name);
  };

  return (
    <Styled.Input
      status={isError}
      name={name}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default memo(TextInput);
