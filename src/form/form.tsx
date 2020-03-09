import React, { memo, useState } from 'react';
import { Validators } from '../validators/validators-interface';
import { IRef } from '../adding-note/adding-note';

interface IForm {
  readonly children: React.ReactElement;
  readonly defaultData?: IDefaultData;
  readonly formRef?: React.Ref<IRef>;
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

export interface IDefaultData {
  readonly [key: string]: IDefaultDataItem;
}

export interface IGetValues {
  [key: string]: string | number;
}

const Form: React.FC<IForm> = ({ children, defaultData = {}, formRef }): React.ReactElement => {
  const getInitialState: () => IDefaultState = () => {
    const childNames: Array<string> = React.Children.map(
      children.props.children,
      (child: React.ReactElement) => child.props.name
    );

    const defaultState: IDefaultStateItem = { value: '', status: '', message: '', validators: [] };

    return childNames.reduce((acc, item: string): IDefaultState => {
      acc[item] = { ...defaultState, ...defaultData[item] };

      return acc;
    }, {} as IDefaultState);
  };

  const [state, setState] = useState<IDefaultState>(getInitialState);

  // TODO: вынести в хук(может быть)
  const validation: (value: string, name: string) => Validators.IReturnData = (value, name) =>
    state[name].validators.reduce(
      (acc, item: Validators.IFunction) => {
        const resultValidator = item(value);

        if (resultValidator.status === '') {
          return acc;
        }

        acc = { ...item(value) };

        return acc;
      },
      { status: '', message: '' } as Validators.IReturnData
    );

  const isValid: () => boolean = () =>
    Object.keys(state).some(controlName => state[controlName].status === 'error');

  const onChange: (value: string, name: string) => void = (value, name) => {
    const validationData = validation(value, name);

    setState({ ...state, [name]: { ...state[name], ...validationData, value } });
  };

  const getValues: () => IGetValues = () =>
    Object.keys(state).reduce((acc, name: string) => {
      acc[name] = state[name].value;

      return acc;
    }, {} as IGetValues);

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
