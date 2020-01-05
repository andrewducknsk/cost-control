import React, { memo } from 'react';
import AddingExpenses from '../adding-expenses';
import Styled from './main-styled';
// import { Switch, Route } from 'react-router-dom';

const Main = () => {
	return (
		<Styled.Main>
			<AddingExpenses />
		</Styled.Main>
	);
};

export default memo(Main);
