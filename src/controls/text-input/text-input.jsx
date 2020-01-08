import React, { memo } from 'react';
import Styled from './text-input-styled';

const defaultProps = {
	value: '',
	placeholder: '',
};

const TextInput = ({ name, onChangeControl, value, type, placeholder }) => {
	const onChange = e => {
		const { value, name } = e.target;

		onChangeControl(value, name);
	};

	return <Styled.Input name={name} type="text" value={value} onChange={onChange} placeholder={placeholder} />;
};

TextInput.defaultProps = defaultProps;

export default memo(TextInput);
