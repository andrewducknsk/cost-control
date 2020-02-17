import React, { memo, useState } from 'react';

interface IForm {
  readonly children: React.ReactElement;
  readonly defaultData: IDefaultState;
  readonly formRef: object;
}

interface IDefaultState {
  readonly value: string;
  readonly status: string;
  readonly message: string;
  readonly validators: [];
}

const Form: React.FC<IForm> = ({ children, defaultData = {}, formRef }): React.ReactElement => {
  const getInitialState = () => {
    const defaultState: IDefaultState = { value: '', status: '', message: '', validators: [] };
    const childNames: Array<string> = React.Children.map(
      children.props.children,
      child => child.props.name
    );
    const newState: { [key: string]: IDefaultState } = {};

    childNames.forEach(
      (name: string): void => (newState[name] = { ...defaultState, ...defaultData[name] })
    );

    return newState;
  };

  const [state, setState] = useState(getInitialState);

  // TODO: вынести в хук
  const validation = (name: string, value: string) =>
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

  const onChange = (value: string, name: string) => {
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
