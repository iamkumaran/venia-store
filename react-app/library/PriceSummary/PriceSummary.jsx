import React from 'react';
import { CHECKOUT_URL, CURRENCY } from '../../utils/config/constants';
import { getURL } from '../../utils/helper';

const PriceSummary = ({ prices, isCart = false }) => {
  const { discounts, grand_total: total, subtotal_including_tax: subTotal } = prices;
  return (
    <div className="priceSummary-root-gOi">
      <div>
        <ul>
          {subTotal?.value && (
            <li className="priceSummary-lineItems-2Sy gap-3 grid grid-cols-autoLast leading-normal">
              <span className="priceSummary-lineItemLabel-1Cs justify-self-start my-2">Subtotal</span>
              <span className="priceSummary-price-1Xv justify-self-end self-center">
                <span>{CURRENCY[subTotal.currency]}</span>
                <span>{subTotal.value}</span>
              </span>
            </li>
          )}

          {discounts?.[0]?.amount?.value && (
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
                -<span>{CURRENCY[discounts[0].amount.currency]}</span>
                <span>{discounts[0].amount.value}</span>
              </span>
              <div
                aria-hidden="true"
                className="rah-static rah-static'--height'-zero"
                style={{ height: 0, overflow: 'hidden' }}>
                <div style={{ display: 'none' }}>
                  <ul className="discountSummary-individualDiscountsList-1tR priceSummary-lineItemLabel-1Cs justify-self-start my-2">
                    <hr className="discountSummary-individualDiscountSeparator-rwM mx-0 my-4" />
                    <li className="discountSummary-individualDiscountsListLineItem-U3T priceSummary-lineItems-2Sy gap-3 grid grid-cols-autoLast leading-normal mx-0 pl-4">
                      <span className="priceSummary-lineItemLabel-1Cs justify-self-start my-2">
                        <span>Discount</span>
                      </span>
                      <span className="priceSummary-price-1Xv justify-self-end self-center">
                        -<span>{CURRENCY[discounts[0].amount.currency]}</span>
                        <span>{discounts[0].amount.value}</span>
                      </span>
                    </li>
                    <hr className="discountSummary-individualDiscountSeparator-rwM mx-0 my-4" />
                  </ul>
                </div>
              </div>
            </li>
          )}
          <li className="priceSummary-lineItems-2Sy gap-3 grid grid-cols-autoLast leading-normal" />
          <li className="priceSummary-lineItems-2Sy gap-3 grid grid-cols-autoLast leading-normal" />
          <li className="priceSummary-lineItems-2Sy gap-3 grid grid-cols-autoLast leading-normal" />
          <li className="priceSummary-lineItems-2Sy gap-3 grid grid-cols-autoLast leading-normal" />
          <li className="priceSummary-lineItems-2Sy gap-3 grid grid-cols-autoLast leading-normal">
            <span className="priceSummary-totalLabel-1xR priceSummary-lineItemLabel-1Cs justify-self-start my-2 font-semibold">
              Estimated Total
            </span>
            <span className="priceSummary-totalPrice-2Y9 priceSummary-price-1Xv justify-self-end self-center font-semibold">
              <span>{CURRENCY[total.currency]}</span>
              <span>{total.value}</span>
            </span>
          </li>
        </ul>
      </div>
      {isCart && (
        <div className="priceSummary-checkoutButton_container-tJ_ items-center inline-flex justify-center mt-xs w-full">
          <a
            href={getURL(CHECKOUT_URL)}
            className="button-root_highPriority-1Zl button-root-17M border-2 border-solid cursor-pointer font-bold inline-flex items-center justify-center leading-tight max-w-full min-w-[10rem] outline-none pointer-events-auto px-sm rounded-full text-center text-sm uppercase disabled_bg-gray-400 disabled_border-gray-400 disabled_opacity-50 disabled_pointer-events-none disabled_text-white focus_shadow-inputFocus bg-brand-dark border-brand-dark text-white active_bg-brand-darkest active_border-brand-darkest active_text-white hover_bg-brand-darkest hover_border-brand-darkest hover_text-white">
            <span className="button-content-3wD gap-1.5 grid-flow-col inline-grid items-center justify-center justify-items-center">
              Proceed to Checkout
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

export default PriceSummary;
