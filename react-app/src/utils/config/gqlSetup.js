import { Client, cacheExchange, fetchExchange } from 'urql';

const gqlClientSetup = () => {
  const storeUrl =
    window.location.hostname === 'localhost'
      ? 'http://localhost:4000/graphql'
      : document.head.querySelector('meta[name=store-config]').content;

  return new Client({
    url: storeUrl,
    exchanges: [cacheExchange, fetchExchange],
  });
};

export default gqlClientSetup;
