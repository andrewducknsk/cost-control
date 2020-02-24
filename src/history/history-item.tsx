import React, { memo } from 'react';
import Styled from './history-item-styled';

interface IHistoryItemProps {
  readonly name: string;
  readonly type: string;
  readonly date: string;
  readonly amount: string;
}

const HistoryItem: React.FC<IHistoryItemProps> = ({ name, type, date, amount }): JSX.Element => {
  return (
    <Styled.HistoryItem>
      <Styled.Header>
        <Styled.TextName>Name - {name}</Styled.TextName>
        <Styled.TextName>amount - {amount}</Styled.TextName>
      </Styled.Header>
      <Styled.Body>
        <p>type - {type}</p>
        <p>date - {date}</p>
      </Styled.Body>
    </Styled.HistoryItem>
  );
};

export default memo(HistoryItem);
