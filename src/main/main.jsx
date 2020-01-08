import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import Styled from './main-styled';
import Greeting from '../greeting';
import History from '../history';

const Main = () => {
	return (
		<Styled.Main>
			<Switch>
				<Route exact path="/" component={Greeting} />
				<Route path="/history" component={History} />
			</Switch>
		</Styled.Main>
	);
};

export default memo(Main);
