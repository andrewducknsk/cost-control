import React, { memo } from 'react';
import Styled from './button-styled';
import { useCustomDispatch } from '../../hooks';
import { actionTypes } from '../../store/actions';

// TODO: types
interface IButtonProps {
  readonly label: string;
  readonly action: string;
  readonly styleType: string;
}

const Button: React.FC<IButtonProps> = ({ label, action, styleType }): JSX.Element => {
  const filterHistory = useCustomDispatch();
  const onClickFiltered: () => void = () =>
    filterHistory(actionTypes.FILTER_HISTORY, { data: action });

  return (
    <Styled.Button onClick={onClickFiltered} styleType={styleType}>
      {label}
    </Styled.Button>
  );
};

export default memo(Button);
