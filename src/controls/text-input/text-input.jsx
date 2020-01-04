import React, { memo } from 'react';
import { InputStyled } from './text-input-styled';

const defaultProps = {
	value: '',
	type: 'text',
	placeholder: '',
};

const TextInput = ({ name, onChangeControl, value, type, placeholder }) => {
	const onChange = e => {
		const { value, name } = e.target;

		onChangeControl(value, name);
	};

	return <InputStyled name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} />;
};

TextInput.defaultProps = defaultProps;

export default memo(TextInput);
