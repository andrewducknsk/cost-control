export namespace Validators {
  interface IReturnData {
    readonly status: string;
    readonly message: string;
  }

  interface IFunction {
    (value: string): IReturnData;
  }
}
