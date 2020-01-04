import React, { memo } from 'react';
import { SelectStyled } from './select-styled';

const defaultProps = {
	value: '',
	options: [],
};

const Select = ({ name, options, value, onChangeControl }) => {
	const onChangeSelect = e => {
		const { value, name } = e.target;

		onChangeControl(value, name);
	};

	const renderOptions = () =>
		options.map(option => (
			<option value={option} key={option}>
				{option}
			</option>
		));

	return (
		<SelectStyled name={name} defaultValue={value} onChange={onChangeSelect}>
			{renderOptions()}
		</SelectStyled>
	);
};

Select.defaultProps = defaultProps;

export default memo(Select);
