import React, { memo, useCallback, useContext, useEffect } from 'react';
import CoreContext from '../core/core-context';
import { useSelector } from 'react-redux';
import Styled from './history-styled';
import Popup from '../popup';
import AddingNote from '../adding-note';
import { useCustomDispatch, usePopup } from '../hooks';
import { actionTypes } from '../store/actions';
import { IState } from '../store/reducers';
import { Locale } from '../core/locale-interface';
import Operation from '../operation/operation';

interface IData extends Map<string, string> {
  readonly expenseName: string;
  readonly expenseType: string;
  readonly expenseDate: string;
  readonly expenseAmount: string;
  readonly id: string;
}

const History: React.FC = (): JSX.Element => {
  const [showPopup, scrollPosition, togglePopup] = usePopup(false);
  const { history }: { history: Locale.History } = useContext(CoreContext);
  // immutable.js
  // @ts-ignore
  const data: Map<string, IData> = useSelector<IState>(state => state.history.data);
  const fetchData: (type: string) => void = useCustomDispatch();

  useEffect(() => {
    fetchData(actionTypes.FETCH_HISTORY);
  }, []);

  const renderOperations: () => JSX.Element | Array<JSX.Element> = useCallback(() => {
    if (data.size === 0) {
      return <Styled.EmptyMessage>{history.emptyMessage}</Styled.EmptyMessage>;
    }

    // immutable.js
    // @ts-ignore
    return data.map(item => (
      <Operation
        header={item.get('header')}
        body={item.get('body')}
        id={item.get('id')}
        key={item.get('id')}
      />
    ));
  }, [data, history]);

  return (
    <Styled.History>
      <Styled.Header>
        <Styled.Title>{history.title}</Styled.Title>
      </Styled.Header>
      {renderOperations()}
      <Styled.Button onClick={togglePopup}>Push</Styled.Button>
      {showPopup && (
        <Popup onClose={togglePopup} scrollPosition={scrollPosition}>
          <AddingNote />
        </Popup>
      )}
    </Styled.History>
  );
};

export default memo(History);
