import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import Styled from './main-styled';
import Greeting from '../greeting';

const Main = () => {
	return (
		<Styled.Main>
			<Switch>
				<Route exact path="/" component={Greeting} />
			</Switch>
		</Styled.Main>
	);
};

export default memo(Main);
