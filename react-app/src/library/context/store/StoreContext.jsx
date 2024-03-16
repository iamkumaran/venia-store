import React, { createContext, useContext, useMemo, useReducer } from 'react';
import reducer from './reducers';

// initial state of the cart config
const initialState = {
  isLoggedIn: false,
  localeCode: 'en-us',
  selectedFilter: [],
  productsCount: 0,
};

// this creates a context for cart.
const StoreContext = createContext({ state: initialState });

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;
};

export const useStoreContext = () => useContext(StoreContext);
