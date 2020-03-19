import { Store } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import GridComponent from './GridComponent';
import Toolbar from './Toolbar';

const App: React.FC<{ store: Store }> = ({ store }) => {
  return (
    <Provider store={store}>
      <Toolbar />
      <GridComponent />
    </Provider>
  );
};

export default App;
