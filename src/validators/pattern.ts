import { Validators } from './validators-interface';

interface IArguments {
  readonly pattern: RegExp;
  readonly message?: string;
}

export default ({ pattern, message = 'Используются запрещенные символы' }: IArguments) => {
  return (value: string): Validators.IReturnData => {
    const valueContainsPattern = value.search(pattern);

    if (valueContainsPattern !== -1) {
      return { status: 'error', message };
    }

    return { status: '', message: '' };
  };
};
