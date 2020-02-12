interface IReturn {
  readonly status: string;
  readonly message: string;
}

export default (message: string = 'Укажите корректную дату') => {
  return (value: string): IReturn => {
    const currentDate = new Date().getTime();
    const receivedDate = new Date(value).getTime();

    if (receivedDate > currentDate) {
      return { status: 'error', message };
    }

    return { status: '', message: '' };
  };
};
