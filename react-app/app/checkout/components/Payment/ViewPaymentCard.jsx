import React from 'react';

const ViewPaymentCard = () => (
  <div className="checkoutPage-payment_information_container-3Cs">
    <div className="paymentInformation-root-2bi gap-xs grid grid-cols-1">
      <div className="paymentInformation-payment_info_container-3-j border-2 border-solid border-subtle rounded-md">
        <div className="braintreeSummary-root-3wU gap-xs grid p-md">
          <div className="braintreeSummary-heading_container-2FO grid grid-cols-1 grid-flow-col">
            <h5 className="braintreeSummary-heading-Htr font-semibold">Payment Information</h5>
            <button className="braintreeSummary-edit_button-3Ud p-xs -m-xs text-brand-dark" type="button">
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
                    className="braintreeSummary-edit_icon-3Kc stroke-brand-base">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                  </svg>
                </span>
                <span className="braintreeSummary-edit_text-fQP hidden lg_inline">Edit</span>
              </span>
            </button>
          </div>
          <div className="braintreeSummary-card_details_container-1VF grid gap-2xs">
            <span className="braintreeSummary-payment_type-26i">Credit Card</span>
            <span className="braintreeSummary-payment_details-3X_">Visa ending in 1111</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ViewPaymentCard;
