import React, { memo } from 'react';
import Styled from './number-input-styled';

const defaultProps = {
	value: '',
	placeholder: '',
};

const NumberInput = ({ name, onChangeControl, value, placeholder }) => {
	const onChange = e => {
		const { value, name } = e.target;

		if (Number(value) < 0) {
			return;
		}

		onChangeControl(value, name);
	};

	return (
		<Styled.NumberInput
			name={name}
			type="number"
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
};

NumberInput.defaultProps = defaultProps;

export default memo(NumberInput);