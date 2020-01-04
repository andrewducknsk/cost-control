import React, { memo } from 'react';
import AddingExpenses from '../adding-expenses';
// import { Switch, Route } from 'react-router-dom';

const Main = () => {
	return (
		<main className="main">
			<AddingExpenses />
		</main>
	);
};

export default memo(Main);
