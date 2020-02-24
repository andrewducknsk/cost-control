import React, { memo } from 'react';
import Styled from './form-control-styled';

// TODO: описать деструкторизацию, нужно посмотреть, что лежит в otherProps
export interface IFormControlProps {
  readonly label: string;
  readonly control: any;
  readonly onChange: (value: string, name: string) => void;
  readonly message: string;
  readonly [otherProps: string]: any;
}

const FormControl: React.FC<IFormControlProps> = ({
  label = '',
  control,
  onChange,
  message,
  ...otherProps
}): JSX.Element => {
  const onChangeControl: (value: string, name: string) => void = (value, name) =>
    onChange(value, name);

  const childProps: object = { ...otherProps, onChangeControl };

  return (
    <Styled.FormControl>
      <label>
        <Styled.LabelText>{label}</Styled.LabelText>
        <control.type {...control.props} {...childProps} />
      </label>
      <Styled.Message>{message}</Styled.Message>
    </Styled.FormControl>
  );
};

export default memo(FormControl);
