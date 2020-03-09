import React, { memo } from 'react';
import { IOperationItemProps } from './index';

const OperationItem: React.FC<IOperationItemProps> = ({ label, value }) => {
  return (
    <span>
      <span>{label}</span> - <span>{value}</span>
    </span>
  );
};

export default memo(OperationItem);
