import React from 'react';
import PriceSummary from '../../../../library/PriceSummary/PriceSummary';

const PriceSummarySection = ({ prices }) => {
  return (
    <div className="cartPage-summary_container-2sh h-full">
      <div className="cartPage-summary_contents-1A5 sticky top-[5.5rem]">
        <PriceSummary prices={prices} isCart />
      </div>
    </div>
  );
};

export default PriceSummarySection;
