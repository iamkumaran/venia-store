import React from 'react';
import { useMutation } from 'urql';
import RadioIcon from '../../../../library/icons/RadioIcon';
import { CURRENCY } from '../../../../utils/config/constants';
import SET_SHIPPING_METHOD_MUTATION from '../../../../utils/gql/mutations/set-shipping-method.gql';
import { getCartIdFromStorage } from '../../../../utils/helper';

const ShippingMethod = ({ list = [] }) => {
  const [, submitShippingMethodMutation] = useMutation(SET_SHIPPING_METHOD_MUTATION);
  const formOnSubmitHandler = e => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(document.querySelector('#shipping-method-form')).entries());
    // eslint-disable-next-line camelcase
    const codeArr = formData.shippingMethod.split('|');

    const variable = {
      cartId: getCartIdFromStorage(),
      shippingMethod: {
        carrier_code: codeArr[0],
        method_code: codeArr[1],
      },
    };
    submitShippingMethodMutation(variable)
      .then(r => {
        console.log(r);
      })
      .catch(err => {
        alert('Something went wrong.');
        console.error('Something went wrong in submitting shipping form => ', err);
      });
  };
  return (
    <div className="checkoutPage-shipping_method_container-34t relative">
      <div className="scrollAnchor-anchor-32b absolute" />
      <h3 className="checkoutPage-shipping_method_heading-1sP checkoutPage-stepper_heading-3Do border-b border-solid border-subtle font-semibold pb-xs text-colorDefault uppercase lg_pb-md">
        2. Shipping Method
      </h3>
      {list.length && (
        <form
          id="shipping-method-form"
          className="shippingMethod-form-nlg gap-y-sm grid grid-rows-autoLast"
          onSubmit={formOnSubmitHandler}>
          <div className="shippingRadios-radioRoot-2lb gap-2xs grid">
            {list.map((item, i) => (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label
                className="radioGroup-radioContainer-2bN gap-3 grid grid-flow-col justify-center leading-normal"
                htmlFor={`shipping_method--${item.carrier_code}-${item.carrier_code}`}
                aria-label="">
                <input
                  name="shippingMethod"
                  className="radio-input-WO- appearance-none bg-clip-content bg-transparent border-8 border-solid border-transparent h-[1.5rem] m-0 rounded-full w-[1.5rem] z-foreground active_outline-none active_shadow-radioActive checked_bg-brand-dark focus_outline-none focus_shadow-radioFocus"
                  id={`shipping_method--${item.carrier_code}-${item.carrier_code}`}
                  type="radio"
                  defaultValue={`${item.carrier_code}|${item.method_code}`}
                  defaultChecked={i === 0}
                />
                <RadioIcon />
                <span className="shippingRadios-radioLabel-K5o gap-2xs grid grid-cols-[100%] justify-start sm_grid-cols-autoAuto">
                  <span>{item.method_title}</span>
                  <div className="shippingRadio-price-2IG font-semibold">
                    <span>
                      {item.amount.value > 0
                        ? `${CURRENCY[item.amount.currency]}${item.amount.value}`
                        : item.method_title}
                    </span>
                  </div>
                </span>
              </label>
            ))}
          </div>
          <p className="message-root-2op font-normal leading-none pb-0.5 pt-2.5 px-0.5 text-colorDefault text-sm" />
          <div className="shippingMethod-formButtons-251 flex justify-center">
            <button
              className="button-root_normalPriority-F4F button-root-17M border-2 border-solid cursor-pointer font-bold inline-flex items-center justify-center leading-tight max-w-full min-w-[10rem] outline-none pointer-events-auto px-sm rounded-full text-center text-sm uppercase disabled_bg-gray-400 disabled_border-gray-400 disabled_opacity-50 disabled_pointer-events-none disabled_text-white focus_shadow-inputFocus bg-transparent border-brand-dark text-brand-dark active_border-brand-darkest active_text-brand-darkest hover_border-brand-darkest hover_text-brand-darkest"
              type="submit">
              <span className="button-content-3wD gap-1.5 grid-flow-col inline-grid items-center justify-center justify-items-center">
                Continue to Payment Information
              </span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ShippingMethod;
