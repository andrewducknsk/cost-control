import React, { memo, useState } from 'react';

interface IForm {
  readonly children: React.ReactElement;
  readonly defaultData: IDefaultData;
  readonly formRef: object;
}

export interface IDefaultData {
  readonly [key: string]: IDefaultDataItem;
}

interface IDefaultDataItem {
  readonly value: string | number;
  readonly validators: Array<(value: string) => void>;
}

interface IDefaultState {
  readonly value: string;
  readonly status: string;
  readonly message: string;
  readonly validators: [];
}

const Form: React.FC<IForm> = ({ children, defaultData = {}, formRef }): React.ReactElement => {
  // TODO: перписать на reduce
  // @ts-ignore
  const getInitialState: () => IDefaultState = () => {
    const defaultState: IDefaultState = {
      value: '',
      status: '',
      message: '',
      validators: [],
    };
    const childNames: Array<string> = React.Children.map(
      children.props.children,
      child => child.props.name
    );
    const newState = {};

    childNames.forEach(
      // @ts-ignore
      (name: string): void => (newState[name] = { ...defaultState, ...defaultData[name] })
    );

    return newState;
  };

  const [state, setState] = useState<IDefaultState>(getInitialState);

  // TODO: вынести в хук
  const validation: (name: string, value: string) => void = (name, value) =>
    // @ts-ignore
    state[name].validators.reduce(
      // @ts-ignore
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

  const isValid: () => boolean = () =>
    // @ts-ignore
    Object.keys(state).some(controlName => state[controlName].status === 'error');

  const onChange = (value: string, name: string) => {
    const validationData = validation(name, value);

    // @ts-ignore
    setState({ ...state, [name]: { ...state[name], ...validationData, value } });
  };

  // TODO: переписать на reduce
  const getValues = () => {
    const values = {};

    // @ts-ignore
    Object.keys(state).forEach(name => (values[name] = state[name].value));

    return values;
  };

  // @ts-ignore
  formRef.current = { getValues, isValid };

  const parentElement: React.ReactElement | never = React.Children.only(children);

  const childrenElements: Array<React.ReactElement> = React.Children.map(
    parentElement.props.children,
    child => {
      // @ts-ignore
      const newProps = { ...state[child.props.name], onChange };

      return <child.type {...child.props} {...newProps} />;
    }
  );

  return <parentElement.type {...parentElement.props}>{childrenElements}</parentElement.type>;
};

export default memo(Form);
