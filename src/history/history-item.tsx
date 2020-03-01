import React, { memo, useState } from 'react';
import Styled from './history-item-styled';

interface IHistoryItemProps {
  readonly name: string;
  readonly type: string;
  readonly date: string;
  readonly amount: string;
}

const HistoryItem: React.FC<IHistoryItemProps> = ({ name, type, date, amount }): JSX.Element => {
  const [isChangeName, setIsChangeName] = useState<boolean>(false);

  const changeName: () => void = () => setIsChangeName(!isChangeName);

  return (
    <Styled.HistoryItem>
      <Styled.Header>
        {!isChangeName && <Styled.TextName onClick={changeName}>Name - {name}</Styled.TextName>}
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
