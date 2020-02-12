interface IReturn {
  readonly status: string;
  readonly message: string;
}

export default (message: string = 'Обязательное поле') => {
  return (value: string): IReturn => {
    if (value.length === 0) {
      return { status: 'error', message };
    }

    return { status: '', message: '' };
  };
};
