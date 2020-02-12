import React, { memo, useState } from 'react';

const defaultProps = {
  defaultData: {},
};

const Form = ({ children, defaultData, formRef }) => {
  const getInitialState = () => {
    const defaultState = { value: '', status: '', message: '', validators: [] };
    const childNames = React.Children.map(children.props.children, child => child.props.name);
    const newState = {};

    childNames.forEach(name => (newState[name] = { ...defaultState, ...defaultData[name] }));

    return newState;
  };

  const [state, setState] = useState(getInitialState);

  // TODO: вынести в хук
  const validation = (name, value) =>
    state[name].validators.reduce(
      (accumulator, item) => {
        const resultValidator = item(value);

        if (resultValidator.status === '') {
          return accumulator;
        }

        accumulator = { ...item(value) };

        return accumulator;
      },
      { status: '', message: '' }
    );

  const isValid = () =>
    Object.keys(state).some(controlName => state[controlName].status === 'error');

  const onChange = (value, name) => {
    const validationData = validation(name, value);

    setState({ ...state, [name]: { ...state[name], ...validationData, value } });
  };

  const getValues = () => {
    const values = {};

    Object.keys(state).forEach(name => (values[name] = state[name].value));

    return values;
  };

  formRef.current = { getValues, isValid };

  const parentElement = React.Children.only(children);

  const childrenElements = React.Children.map(parentElement.props.children, child => {
    const newProps = { ...state[child.props.name], onChange };

    return <child.type {...child.props} {...newProps} />;
  });

  return <parentElement.type {...parentElement.props}>{childrenElements}</parentElement.type>;
};

Form.defaultProps = defaultProps;

export default memo(Form);
