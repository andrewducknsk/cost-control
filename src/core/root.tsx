import React, { memo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CoreContext from './core-context';
import locale from './locale';
import Header from '../header';
import Main from '../main';
import createStore from '../store/create-store';

const store = createStore({});

const Root = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <CoreContext.Provider value={locale}>
          <Header />
          <Main />
        </CoreContext.Provider>
      </Provider>
    </BrowserRouter>
  );
};

export default memo(Root);
