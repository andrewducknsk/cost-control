interface IArguments {
  readonly pattern: RegExp;
  readonly message?: string;
}

interface IReturn {
  readonly status: string;
  readonly message: string;
}

export default ({ pattern, message = 'Используются запрещенные символы' }: IArguments) => {
  return (value: string): IReturn => {
    const valueContainsPattern = value.search(pattern);

    if (valueContainsPattern !== -1) {
      return { status: 'error', message };
    }

    return { status: '', message: '' };
  };
};
