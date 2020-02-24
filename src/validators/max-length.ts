import { Validators } from './validators-interface';

interface IArguments {
  readonly length: number;
  readonly message?: string;
}

export default ({ length, message = 'Слишком длинное значение' }: IArguments) => {
  return (value: string): Validators.IReturnData => {
    if (value.length > length) {
      return { status: 'error', message };
    }

    return { status: '', message: '' };
  };
};
