interface IArguments {
  readonly length: number;
  readonly message?: string;
}

interface IReturn {
  readonly status: string;
  readonly message: string;
}

export default ({ length, message = 'Слишком длинное значение' }: IArguments) => {
  return (value: string): IReturn => {
    if (value.length > length) {
      return { status: 'error', message };
    }

    return { status: '', message: '' };
  };
};
