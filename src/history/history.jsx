import React, { memo, useCallback, useContext, useEffect } from 'react';
import CoreContext from '../core/core-context';
import { useSelector } from 'react-redux';
import Styled from './history-styled';
import HistoryItem from './history-item';
import Popup from '../popup';
import AddingNote from '../adding-note';
import { useCustomDispatch, usePopup } from '../hooks';
import SettingBar from '../setting-bar';
import { actionTypes } from '../store/actions';

const History = () => {
	const [showPopup, scrollPosition, togglePopup] = usePopup(false);
	const { history } = useContext(CoreContext);
	const data = useSelector(state => state.history.data);
	const fetchData = useCustomDispatch();
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

	useEffect(() => {
		fetchData(actionTypes.FETCH_HISTORY);
	}, []);

	const renderItems = useCallback(() => {
		if (data.size === 0) {
			return <Styled.EmptyMessage>{history.emptyMessage}</Styled.EmptyMessage>;
		}

		return getFilteredData(filterType).map(item => {
			return (
				<HistoryItem
					name={item.get('expenseName')}
					type={item.get('expenseType')}
					date={item.get('expenseDate')}
					amount={item.get('expenseAmount')}
					key={item.get('id')}
				/>
			);
		});
	}, [data, history, filterType, getFilteredData]);

	return (
		<Styled.History>
			<Styled.Header>
				<Styled.Title>{history.title}</Styled.Title>
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
