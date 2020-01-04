import React, { memo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CoreContext from './core-context';
import locale from './locale';
import Header from '../header';
import Main from '../main';

const Root = () => {
	return (
		<BrowserRouter>
			<CoreContext.Provider value={locale}>
				<Header />
				<Main />
			</CoreContext.Provider>
		</BrowserRouter>
	);
};

export default memo(Root);
