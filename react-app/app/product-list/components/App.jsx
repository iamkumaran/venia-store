import React from 'react';
import { Provider } from 'urql';
import Component from './Component';
import { StoreProvider } from '../../../library/context/store/StoreContext';
import gqlClientSetup from '../../../utils/config/gqlSetup';
import InitCart from '../../../library/InitCart/InitCart';

const App = () => (
  <Provider value={gqlClientSetup()}>
    <StoreProvider>
      <InitCart>
        <Component />
      </InitCart>
    </StoreProvider>
  </Provider>
);

export default App;
