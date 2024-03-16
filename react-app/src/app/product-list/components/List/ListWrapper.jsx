import React from 'react';
import List from './List';
import { useStoreContext } from '../../../../library/context/store/StoreContext';

const ListWrapper = () => {
  const { state } = useStoreContext();
  // useEffect(() => {

  // }, [state.selectedFilter]);
  return <List filtersList={state.selectedFilter} />;
};

export default ListWrapper;
