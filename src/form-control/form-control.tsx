import React, { memo } from 'react';
import Styled from './form-control-styled';

// TODO: описать деструкторизацию
interface IFormControlProps {
  readonly label: string;
  readonly control: JSX.Element;
  readonly onChange: (value: string, name: string) => void;
  readonly message: string;
}

const FormControl: React.FC<IFormControlProps> = ({
  label = '',
  control,
  onChange,
  message,
  ...otherProps
}): JSX.Element => {
  const onChangeControl = (value: string, name: string): void => onChange(value, name);

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
