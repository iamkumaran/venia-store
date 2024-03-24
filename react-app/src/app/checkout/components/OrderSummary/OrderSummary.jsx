import React from 'react';

const OrderSummary = () => {
  return (
    <div className="checkoutPage-summaryContainer-2bL lg_h-minContent lg_sticky lg_top-[6rem] checkoutPage-signInContainerVisible-2ey checkoutPage-reCaptchaMargin-1IR">
      <div className="orderSummary-root-pTK border-t-2 border-solid border-subtle mt-xs pt-md lg_border-2 lg_border-solid lg_border-subtle lg_rounded-md lg_mt-0 lg_p-md">
        <h1 aria-live="polite" className="orderSummary-title-1_f sr-only">
          Order Summary
        </h1>
        <div className="priceSummary-root-gOi">
          <div>
            <ul>
              <li className="priceSummary-lineItems-2Sy gap-3 grid grid-cols-autoLast leading-normal">
                <span className="priceSummary-lineItemLabel-1Cs justify-self-start my-2">Subtotal</span>
                <span className="priceSummary-price-1Xv justify-self-end self-center">
                  <span>$</span>
                  <span>1</span>
                  <span>,</span>
                  <span>960</span>
                  <span>.</span>
                  <span>00</span>
                </span>
              </li>
              <li className="discountSummary-discountLineItems-3TB priceSummary-lineItems-2Sy gap-3 grid grid-cols-autoLast leading-normal items-center">
                <span className="discountSummary-discountLineItemLabel-LrJ priceSummary-lineItemLabel-1Cs justify-self-start my-2 grid grid-flow-col items-center">
                  Applied discounts
                  <button
                    type="button"
                    aria-expanded="false"
                    aria-label="Show individual discounts."
                    className="discountSummary-discountsButton-1TI grid items-center ml-2">
                    <span className="icon-root-2x9 items-center inline-flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon-icon-_rq">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                </span>
                <span className="priceSummary-price-1Xv justify-self-end self-center">
                  -<span>$</span>
                  <span>980</span>
                  <span>.</span>
                  <span>00</span>
                </span>
              </li>
              <div
                aria-hidden="true"
                className="rah-static rah-static--height-zero"
                style={{ height: 0, overflow: 'hidden' }}>
                <div style={{ display: 'none' }}>
                  <ul className="discountSummary-individualDiscountsList-1tR priceSummary-lineItemLabel-1Cs justify-self-start my-2">
                    <hr className="discountSummary-individualDiscountSeparator-rwM mx-0 my-4" />
                    <li className="discountSummary-individualDiscountsListLineItem-U3T priceSummary-lineItems-2Sy gap-3 grid grid-cols-autoLast leading-normal mx-0 pl-4">
                      <span className="priceSummary-lineItemLabel-1Cs justify-self-start my-2">
                        <span>Discount</span>
                      </span>
                      <span className="priceSummary-price-1Xv justify-self-end self-center">
                        -<span>$</span>
                        <span>980</span>
                        <span>.</span>
                        <span>00</span>
                      </span>
                    </li>
                    <hr className="discountSummary-individualDiscountSeparator-rwM mx-0 my-4" />
                  </ul>
                </div>
              </div>
              <li className="priceSummary-lineItems-2Sy gap-3 grid grid-cols-autoLast leading-normal" />
              <li className="priceSummary-lineItems-2Sy gap-3 grid grid-cols-autoLast leading-normal" />
              <li className="priceSummary-lineItems-2Sy gap-3 grid grid-cols-autoLast leading-normal" />
              <li className="priceSummary-lineItems-2Sy gap-3 grid grid-cols-autoLast leading-normal" />
              <li className="priceSummary-lineItems-2Sy gap-3 grid grid-cols-autoLast leading-normal">
                <span className="priceSummary-totalLabel-1xR priceSummary-lineItemLabel-1Cs justify-self-start my-2 font-semibold">
                  Total
                </span>
                <span className="priceSummary-totalPrice-2Y9 priceSummary-price-1Xv justify-self-end self-center font-semibold">
                  <span>$</span>
                  <span>980</span>
                  <span>.</span>
                  <span>00</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
