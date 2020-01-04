import React, { memo } from 'react';

const defaultProps = {
	value: '',
	label: '',
	message: '',
	onChangeForm: () => {},
};

const FormControl = ({ label, control, onChangeForm, message, ...otherProps }) => {
	const onChangeControl = (value, name) => onChangeForm(value, name);

	const childProps = { ...otherProps, onChangeControl };

	return (
		<div>
			<label>
				{label}
				<control.type {...control.props} {...childProps} />
			</label>
			<div>{message}</div>
		</div>
	);
};

FormControl.defaultProps = defaultProps;

export default memo(FormControl);
