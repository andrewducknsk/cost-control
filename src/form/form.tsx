import React, { memo, useState } from 'react';
import { Validators } from '../validators/validators-interface';

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
  readonly validators: Array<(value: string) => Validators.IReturnData>;
}

interface IDefaultState {
  [key: string]: IDefaultStateItem;
}

interface IDefaultStateItem {
  readonly value: string | number;
  readonly status: string;
  readonly message: string;
  readonly validators: Array<(value: string) => Validators.IReturnData>;
}

const Form: React.FC<IForm> = ({ children, defaultData = {}, formRef }): React.ReactElement => {
  // TODO: useMemo
  const getInitialState: () => IDefaultState = () => {
    const childNames: Array<string> = React.Children.map(
      children.props.children,
      (child: React.ReactElement) => child.props.name
    );

    const defaultState: IDefaultStateItem = { value: '', status: '', message: '', validators: [] };

    return childNames.reduce((accumulator, item: string) => {
      accumulator[item] = { ...defaultState, ...defaultData[item] };

      return accumulator;
    }, {} as IDefaultState);
  };

  const [state, setState] = useState<IDefaultState>(getInitialState);

  // TODO: вынести в хук(может быть)
  const validation: (name: string, value: string) => Validators.IReturnData = (name, value) =>
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

  const isValid: () => boolean = () =>
    Object.keys(state).some(controlName => state[controlName].status === 'error');

  const onChange = (value: string, name: string) => {
    const validationData = validation(name, value);

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
      const newProps = { ...state[child.props.name], onChange };

      return <child.type {...child.props} {...newProps} />;
    }
  );

  return <parentElement.type {...parentElement.props}>{childrenElements}</parentElement.type>;
};

export default memo(Form);
