export { default } from './operation';

// TODO: возможно в отдельный файл
export interface IOperationProps {
  readonly header: Array<IOperationItemProps>;
  readonly body: Array<IOperationItemProps>;
}

export interface IOperationItemProps {
  readonly label: string;
  readonly value: string;
}
