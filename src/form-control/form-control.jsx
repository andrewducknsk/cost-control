import React, { memo } from 'react';
import Styled from './form-control-styled';

const defaultProps = {
	value: '',
	label: '',
	message: '',
	onChange: () => {},
};

const FormControl = ({ label, control, onChange, message, ...otherProps }) => {
	const onChangeControl = (value, name) => onChange(value, name);

	const childProps = { ...otherProps, onChangeControl };

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

FormControl.defaultProps = defaultProps;

export default memo(FormControl);
