import React from 'react';
import List from './List';
import { useStoreContext } from '../../../../library/context/store/StoreContext';

const ListWrapper = () => {
  const {
    state: { uid, selectedFilter },
  } = useStoreContext();
  if (!uid) return null;
  return <List filtersList={selectedFilter} />;
};

export default ListWrapper;
