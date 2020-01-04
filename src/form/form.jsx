import React, { memo, useState } from 'react';

const defaultProps = {
	defaultData: {},
};

const Form = ({ children, defaultData, formRef }) => {
	const getInitialState = () => {
		const defaultState = { value: '' };
		const childNames = React.Children.map(children.props.children, child => child.props.name);
		const newState = {};

		childNames.forEach(name => (newState[name] = { ...defaultState, ...defaultData[name] }));

		return newState;
	};

	const [state, setState] = useState(getInitialState);

	const onChangeForm = (value, name) => {
		const newData = state;
		newData[name].value = value;

		setState({ ...state, ...newData });
	};

	const getValues = () => {
		const values = {};

		Object.keys(state).forEach(name => (values[name] = state[name].value));

		return values;
	};

	formRef.current = { getValues };

	const parentElement = React.Children.only(children);

	const childrenElements = React.Children.map(parentElement.props.children, child => {
		if (typeof child.type === 'object') {
			const newProps = { ...state[child.props.name], onChangeForm };

			return <child.type {...child.props} {...newProps} />;
		}

		return <child.type {...child.props} />;
	});

	return <parentElement.type {...parentElement.props}>{childrenElements}</parentElement.type>;
};

Form.defaultProps = defaultProps;

export default memo(Form);
