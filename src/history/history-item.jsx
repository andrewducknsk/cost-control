import React, { memo } from 'react';
import Styled from './history-item-styled';

const HistoryItem = ({ name, type, date, amount }) => {
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
