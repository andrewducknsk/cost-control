import React, { memo } from 'react';
import Styled from './operation-styled';
import OperationItem from './operation-item';
import { IOperationProps } from './index';

const Operation: React.FC<IOperationProps> = ({ header, body, id }): JSX.Element => {
  // @ts-ignore
  const renderOperationItem: (section: object) => Array<JSX.Element> = section => {
    // Immutable.js
    // @ts-ignore
    return section.map(item => (
      <OperationItem
        label={item.get('label')}
        value={item.get('value')}
        type={item.get('type')}
        key={item.get('label')}
      />
    ));
  };

  return (
    <Styled.Operation>
      <Styled.Header>{renderOperationItem(header)}</Styled.Header>
      <Styled.Body>{renderOperationItem(body)}</Styled.Body>
    </Styled.Operation>
  );
};

export default memo(Operation);
