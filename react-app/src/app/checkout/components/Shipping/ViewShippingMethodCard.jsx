import React from 'react';
import { CURRENCY } from '../../../../utils/config/constants';

const ViewShippingMethodCard = ({ method }) => (
  <div className="checkoutPage-shipping_method_container-34t relative">
    <div className="scrollAnchor-anchor-32b absolute" />
    <div className="shippingMethod-done-3io shippingMethod-root-2Ia border-b-2 border-solid border-subtle grid gap-y-xs p-md rounded-md border-2 border-solid border-subtle">
      <div className="completedView-root-cJN h-full">
        <div>
          <span className="completedView-titleContainer-3IO grid grid-cols-1 grid-flow-col">
            <h5 className="completedView-heading-37u font-semibold">Shipping Method</h5>
            <button className="completedView-editButton-uoJ p-xs -m-xs text-brand-dark" type="button">
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
                    className="completedView-editIcon-3Dw stroke-brand-base">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                  </svg>
                </span>
                <span className="completedView-editButtonText-2cj hidden lg_inline">Edit</span>
              </span>
            </button>
          </span>
          <div className="completedView-contents-2v6 gap-y-2xs grid mt-xs text-left">
            <span>{method.method_title}</span>
            <div>
              <span>{CURRENCY[method.amount.currency]}</span>
              <span>{method.amount.value}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ViewShippingMethodCard;
