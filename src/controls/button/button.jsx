import React, { memo } from 'react';
import Styled from './button-styled';
import { useCustomDispatch } from '../../hooks';
import { actionTypes } from '../../store/actions';

const Button = ({ label, action, styleType }) => {
	const filterHistory = useCustomDispatch();
	const onClickFiltered = () => filterHistory(actionTypes.FILTER_HISTORY, action);

	return (
		<Styled.Button onClick={onClickFiltered} styleType={styleType}>
			{label}
		</Styled.Button>
	);
};

export default memo(Button);
