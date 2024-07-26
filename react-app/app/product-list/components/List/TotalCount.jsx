import React from 'react';
import { useStoreContext } from '../../../../library/context/store/StoreContext';

const TotalCount = () => {
  const {
    state: { productsCount },
  } = useStoreContext();
  return (
    <div className="category-categoryInfo-3Ci leading-tight max-w-[75vw] mx-0 my-xs text-center lg_m-0 lg_text-left">
      {productsCount} Results
    </div>
  );
};

export default TotalCount;
