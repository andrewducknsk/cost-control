import React, { memo, useState } from 'react';
import { IOperationItemProps } from './index';
import TextInput from '../controls/text-input/text-input';

const OperationItem: React.FC<IOperationItemProps> = ({ label, value, type }): JSX.Element => {
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [fieldValue, setFieldValue] = useState<string>(value);

  const onClickField: () => void = () => setIsEdited(true);

  const onChangField: (value: string) => void = value => {
    setFieldValue(value);
  };

  return (
    <div onClick={onClickField}>
      {!isEdited && (
        <span>
          <span>{label}</span> - <span>{value}</span>
        </span>
      )}
      {isEdited && (
        <TextInput name={'operationName'} onChangeControl={onChangField} value={fieldValue} />
      )}
    </div>
  );
};

export default memo(OperationItem);
