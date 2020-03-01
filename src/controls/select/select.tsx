import React, { memo } from 'react';
import Styled from './select-styled';

interface ISelectArguments {
  readonly name: string;
  readonly onChangeControl: (value: string, name: string) => void;
  readonly value?: string;
  readonly options?: Array<string>;
}

const Select: React.FC<ISelectArguments> = ({
  name,
  onChangeControl,
  value = '',
  options = [],
}): JSX.Element => {
  const onChangeSelect: (e: React.ChangeEvent<HTMLOptionElement>) => void = e => {
    const { value }: { value: string } = e.target;

    onChangeControl(value, name);
  };

  const renderOptions: () => Array<JSX.Element> = () =>
    options.map(option => (
      <option value={option} key={option}>
        {option}
      </option>
    ));

  return (
    <Styled.Select name={name} defaultValue={value} onChange={onChangeSelect}>
      {renderOptions()}
    </Styled.Select>
  );
};

export default memo(Select);
