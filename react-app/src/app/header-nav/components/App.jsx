import React from 'react';
import { Provider } from 'urql';
import Component from './Component';
import { StoreProvider } from '../../../library/context/store/StoreContext';
import gqlClientSetup from '../../../utils/config/gqlSetup';
import MiniCart from './MiniCart';

export const App = () => {
  return (
    <Provider value={gqlClientSetup()}>
      <StoreProvider>
        <Component />
        <MiniCart />
      </StoreProvider>
    </Provider>
  );
};

export default App;
