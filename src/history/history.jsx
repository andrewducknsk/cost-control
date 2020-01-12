import React, { memo, useCallback } from 'react';
// import CoreContext from '../core/core-context';
import { useSelector } from 'react-redux';
import Styled from './history-styled';
import HistoryItem from './history-item';
import Popup from '../popup';
import AddingNote from '../adding-note';
import { usePopup } from '../hooks';
import SettingBar from '../setting-bar';

const History = () => {
	const [showPopup, scrollPosition, togglePopup] = usePopup(false);
	const data = useSelector(state => state.history.data);
	const filterType = useSelector(state => state.history.filterType);

	const getFilteredData = useCallback(
		filterType => {
			if (filterType === '') {
				return data;
			}

			return data.filter(item => item.get('type') === filterType);
		},
		[data]
	);

	const renderItems = useCallback(
		() =>
			getFilteredData(filterType).map(item => (
				<HistoryItem
					name={item.get('expenseName')}
					type={item.get('expenseType')}
					date={item.get('expenseDate')}
					amount={item.get('expenseAmount')}
					key={item.get('id')}
				/>
			)),
		[filterType, getFilteredData]
	);

	return (
		<Styled.History>
			<Styled.Header>
				<Styled.Title>{}</Styled.Title>
				{showPopup && (
					<Popup onClose={togglePopup} scrollPosition={scrollPosition}>
						<AddingNote />
					</Popup>
				)}
			</Styled.Header>
			<SettingBar />
			{renderItems()}
			<Styled.Button onClick={togglePopup}>Push</Styled.Button>
		</Styled.History>
	);
};

export default memo(History);
