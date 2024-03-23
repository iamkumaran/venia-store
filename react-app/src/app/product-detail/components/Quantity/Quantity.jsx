import React from 'react';
import QuantityStepper from '../../../../library/QuantityStepper/QuantityStepper';

const Quantity = ({ setQty, selectedQty }) => (
  <section className="productFullDetail-quantity-lZ3 productFullDetail-section-NVM border-solid border-subtle border-t-0 border-r-0 border-b border-l-0 my-0 mx-sm px-0 py-xs">
    <span className="productFullDetail-quantityTitle-OpI option-title-2h- block font-semibold leading-normal mb-sm text-colorDefault">
      Quantity
    </span>
    <QuantityStepper setQty={setQty} classes="productFullDetail-quantityRoot-148" selectedQty={selectedQty} />
  </section>
);

export default Quantity;
