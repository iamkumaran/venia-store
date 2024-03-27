import React from 'react';
import { useMutation } from 'urql';
import RadioIcon from '../../../../library/icons/RadioIcon';
import { getCartIdFromStorage } from '../../../../utils/helper';
import SET_SELECTED_PAYMENT_METHOD from '../../../../utils/gql/mutations/set-selected-payment-method';

const PaymentForm = ({ payments, updateStepper }) => {
  const [, triggerSetPayment] = useMutation(SET_SELECTED_PAYMENT_METHOD);

  const formHandler = e => {
    e.preventDefault();
    triggerSetPayment({
      cartId: getCartIdFromStorage(),
      paymentNonce: 'tokencc_bh_zq5rck_4tq7xj_yt8ccp_kcsgyx_r83',
    })
      .then(r => {
        console.log('payment starus', r);
        updateStepper(prevState => ({
          ...prevState,
          ...{ step3: true },
        }));
      })
      .catch(err => {
        alert('something went wrong in payment');
        console.log('something went wrong in payment', err);
      });
  };

  return (
    <div className="checkoutPage-payment_information_container-3Cs">
      <div className="paymentInformation-root-2bi gap-xs grid grid-cols-1">
        <div className="paymentInformation-payment_info_container-3-j border-2 border-solid border-subtle rounded-md">
          <form onSubmit={formHandler}>
            <div className="paymentMethods-root-1Wm grid p-md pb-s">
              <div className="paymentMethods-radio_group-D45 grid">
                {payments?.length > 0 &&
                  payments.map(item => {
                    // only Credit card payment is built for demo. Skipping other payments
                    if (item.code !== 'braintree') {
                      return null;
                    }
                    return (
                      <div
                        key={`py-${item.code}`}
                        className="paymentMethods-payment_method-3Mc border-b border-solid border-subtle pb-xs pt-xs">
                        <label
                          className="radio-root-1CC gap-3 grid grid-flow-col items-center justify-items-center leading-normal m-0 text-colorDefault"
                          htmlFor={`paymentMethod--${item.code}`}
                          aria-label="">
                          <input
                            className="radio-input-WO- appearance-none bg-clip-content bg-transparent border-8 border-solid border-transparent h-[1.5rem] m-0 rounded-full w-[1.5rem] z-foreground active_outline-none active_shadow-radioActive checked_bg-brand-dark focus_outline-none focus_shadow-radioFocus"
                            id={`paymentMethod--${item.code}`}
                            type="radio"
                            defaultValue={item.code}
                          />
                          <RadioIcon />
                          <span className="paymentMethods-radio_label-28X font-semibold justify-self-start">
                            {item.title}
                          </span>
                        </label>
                      </div>
                    );
                  })}
              </div>
              <p className="message-root-2op font-normal leading-none pb-0.5 pt-2.5 px-0.5 text-colorDefault text-sm" />
              <div className="shippingMethod-formButtons-251 flex justify-center pt-2.5">
                <button
                  className="button-root_normalPriority-F4F button-root-17M border-2 border-solid cursor-pointer font-bold inline-flex items-center justify-center leading-tight max-w-full min-w-[10rem] outline-none pointer-events-auto px-sm rounded-full text-center text-sm uppercase disabled_bg-gray-400 disabled_border-gray-400 disabled_opacity-50 disabled_pointer-events-none disabled_text-white focus_shadow-inputFocus bg-transparent border-brand-dark text-brand-dark active_border-brand-darkest active_text-brand-darkest hover_border-brand-darkest hover_text-brand-darkest"
                  type="submit">
                  <span className="button-content-3wD gap-1.5 grid-flow-col inline-grid items-center justify-center justify-items-center">
                    Review Order
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
