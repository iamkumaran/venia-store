import React from 'react';
import List from './List';
import { useStoreContext } from '../../../../library/context/store/StoreContext';

const ListWrapper = ({ setCategoryName }) => {
  const {
    state: { uid, selectedFilter },
  } = useStoreContext();
  if (!uid) return null;
  return <List setCategoryName={setCategoryName} filtersList={selectedFilter} />;
};

export default ListWrapper;
