import React, { memo } from 'react';
import Styled from './select-styled';

interface ISelectArguments {
  readonly name: string;
  readonly options: Array<string>;
  readonly value: string;
  readonly onChangeControl: (value: string, name: string) => void;
}

const Select: React.FunctionComponent<ISelectArguments> = ({
  name,
  options = [],
  value = '',
  onChangeControl,
}): JSX.Element => {
  const onChangeSelect = (e: React.ChangeEvent<HTMLOptionElement>): void => {
    const { value } = e.target;

    onChangeControl(value, name);
  };

  const renderOptions = (): Array<JSX.Element> =>
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
