import React from 'react';
import ShippingForm from './ShippingForm';

const Shipping = () => {
  return (
    <div className="checkoutPage-shipping_information_container-293 relative">
      <div className="scrollAnchor-anchor-32b absolute" />
      <div className="shippingInformation-root_editMode-1Xz shippingInformation-root-Khd border-2 border-solid border-subtle p-md rounded-md border-0 border-b-2 border-solid border-subtle p-0 rounded-none">
        <h3 className="shippingInformation-editTitle-3Ng font-semibold uppercase">1. Shipping Information</h3>
        <div className="shippingInformation-editWrapper-uRu grid pb-sm pt-xs px-0 gap-y-2xs">
          <ShippingForm />
        </div>
      </div>
    </div>
  );
};

export default Shipping;
