import { Validators } from './validators-interface';

export default (message: string = 'Укажите корректную дату') => {
  return (value: string): Validators.IReturnData => {
    const currentDate = new Date().getTime();
    const receivedDate = new Date(value).getTime();

    if (receivedDate > currentDate) {
      return { status: 'error', message };
    }

    return { status: '', message: '' };
  };
};
