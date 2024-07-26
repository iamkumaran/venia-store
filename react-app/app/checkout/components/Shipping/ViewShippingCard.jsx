import React from 'react';

const ViewShippingCard = ({ data }) => {
  return (
    <div className="checkoutPage-shipping_information_container-293 relative">
      <div className="scrollAnchor-anchor-32b absolute" />
      <div className="shippingInformation-root-Khd border-2 border-solid border-subtle p-md rounded-md">
        <div className="shippingInformation-cardHeader-3-i grid grid-cols-1 grid-flow-col">
          <h5 className="shippingInformation-cardTitle-2mO font-semibold">1. Shipping Information</h5>
          <button className="shippingInformation-editButton-2qg -m-xs p-xs text-brand-dark" type="button">
            <span className="button-content-3wD gap-1.5 grid-flow-col inline-grid items-center justify-center justify-items-center">
              <span className="icon-root-2x9 items-center inline-flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shippingInformation-editIcon-1TT stroke-brand-base">
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                </svg>
              </span>
              <span className="shippingInformation-editText-B0J hidden lg_inline">Edit</span>
            </span>
          </button>
        </div>
        <div className="card-root-2fG gap-y-2xs grid pt-xs text-colorDefault">
          <span>{data.email}</span>
          <span>
            {data.firstname} {data.lastname}
          </span>
          <span>{data.telephone}</span>
          <div className="card-address-20a gap-2xs grid pt-xs">
            <span>{data.street[0]}</span>
            <span>{data.street[0]}</span>
            <span>
              {data.city}, {data.state} {data.postcode} {data.country.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewShippingCard;
