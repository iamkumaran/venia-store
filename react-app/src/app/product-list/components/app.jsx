import React from 'react';
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';
import List from './List/List.jsx';

export function App() {
  const storeUrl =
  window.location.hostname === "localhost" ? "http://localhost:4000/graphql" : document.head.querySelector('meta[name=store-config]').content;

  const client = new Client({
    url: storeUrl,
    exchanges: [cacheExchange, fetchExchange],
  });
  return (
    <Provider value={client}>
      <div className="bar">
        <h3>Hello</h3>
        <List />
      </div>
    </Provider>
  );
}

export default App;
