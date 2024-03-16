import React from 'react';
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';
import Component from './Component';
import { StoreProvider } from '../../../library/context/store/StoreContext';

export const App = () => {
  const storeUrl =
    window.location.hostname === 'localhost'
      ? 'http://localhost:4000/graphql'
      : document.head.querySelector('meta[name=store-config]').content;

  const client = new Client({
    url: storeUrl,
    exchanges: [cacheExchange, fetchExchange],
  });
  return (
    <Provider value={client}>
      <StoreProvider>
        <Component />
      </StoreProvider>
    </Provider>
  );
};

export default App;
