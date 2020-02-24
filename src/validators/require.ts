import { Validators } from './validators-interface';

export default (message: string = 'Обязательное поле') => {
  return (value: string): Validators.IReturnData => {
    if (value.length === 0) {
      return { status: 'error', message };
    }

    return { status: '', message: '' };
  };
};
