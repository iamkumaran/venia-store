import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'urql';
import GuestSignInButton from './SignIn/GuestSignInButton';
import Shipping from './Shipping/Shipping';
import ShippingMethod from './Shipping/ShippingMethod';
import Payment from './Payment/Payment';
import OrderSummary from './OrderSummary/OrderSummary';
import { getCartIdFromStorage, lazyloadJS } from '../../../utils/helper';
// import GET_SHIPPING_INFO_QUERY from '../../../utils/gql/get-shipping-info.gql';
import ViewShippingCard from './Shipping/ViewShippingCard';
import GET_SHIPPING_METHOD_QUERY from '../../../utils/gql/get-shipping-method.gql';
import ViewShippingMethodCard from './Shipping/ViewShippingMethodCard';
import ReviewOrder from './OrderSummary/ReviewOrder';
import PLACE_ORDER_MUTATION from '../../../utils/gql/mutations/place-order.gql';
import CREATE_CART_MUTATION from '../../../utils/gql/mutations/create-cart.gql';
import GET_RECAPTHCHA_QUERY from '../../../utils/gql/get-recaptcha.gql';

const Component = () => {
  const [stepper, setStepper] = useState({ step1: false, step2: false, step3: false });

  // get price query
  const [result] = useQuery({
    query: GET_SHIPPING_METHOD_QUERY,
    variables: {
      cartId: getCartIdFromStorage(),
    },
  });

  // GET_RECAPTHCHA_QUERY
  const [captchaKey, setCatpchaKey] = useState('');
  const [captchaResult, executeCaptchaCall] = useQuery({
    query: GET_RECAPTHCHA_QUERY,
    pause: true,
  });

  const [, triggerPlaceOrderMutation] = useMutation(PLACE_ORDER_MUTATION);
  // const [, triggerEmtpyCartMutation] = useMutation(CREATE_CART_MUTATION);

  const { data, fetching, error } = result;

  const { data: captchaData, fetching: captchaFetching, error: captchaError } = captchaResult;

  // if (fetching) return <p>Loading...</p>;
  // if (error) return <p>Oh no... {error.message}</p>;

  const placeOrderHandler = () => {
    // place order call
    triggerPlaceOrderMutation(
      { cartId: getCartIdFromStorage() },
      {
        fetchOptions: {
          headers: {
            'X-Recaptcha':
              '03AFcWeA5jUbf05JBRcmvCWzzqVhjwGLukg6t2CdGqrZd5LMXXStnht3DrpbLaBmICPRgdcegfRcFOGKXT5586mIo9aXD6RJ8ZDLt3L7Zz0k9NPSguyrfzUAVSpWL8SEs88kx3OfFA3eT6Qn8BPHMTD7Pe_sfMXnPKSe0N5QgXDdH6UeZjAv4-D8s2bQFSjmNu2Hwd9yOcJu9QxK4BPe1CP9A_D7vka8sLq0cCiEyV6o_odbi2ONjsnKMPrb5A94T-EOUPqlocWAwgX2h6NOBc55vOiC3YsnItEroy7u6rjv9C12eB_B1usLldHBB6C9sDDNp_lhcjDwI-IpUXSpjRCwFGRivV8bRH4Sznjw4Fv0P4FxF_Vq-B6S1gIiviAhEWD3UEQHFw5TnglYx83PoOQwSYRN7rHwT5aQqgRpWqirRfr-qTTGlyaV1O4wp9dx1hfBplHdZ2d8Mt8UwEWYcVe6dY5jI67jQsiMnudQvfsRZVS0i18YVHW45AHTO8s0WtQKI0QVuaZUjtLUeifhUDEopBaARRWriHNKOIFvI8VCp-ZNCyGM_2sWximVSa2EL0DuvqTyURaMEqMSElO2u5GYV3WNzIsQxKXxluELQ-trFjVxsn0urmyK_fCdQe2WoZvfcvu_2bbAjIdf7CCVw_h5zMxKsFB5ygytD_12OSyW83NiaFMZ5axiIpr42VpM_aEaY6m8ogjXTX6m00kCXdPkdg0Ph4kY7BUZ5gdG2k2UeqmkUgD8cvETc',
          },
        },
      }
    )
      .then(r => {
        console.error('placing order success', r);
      })
      .catch(err => {
        alert('placing order failed');
        console.error('placing order failed => ', err);
      });
  };

  useEffect(() => {
    executeCaptchaCall();
  }, []);

  // useEffect(() => {
  //   if (captchaData?.recaptchaV3Config) {
  //     setCatpchaKey(captchaData.recaptchaV3Config.website_key);
  //     // setTimeout(() => {
  //     //   lazyloadJS('https://www.google.com/recaptcha/api.js', null, () => {
  //     //     setTimeout(() => {
  //     //       window.grecaptcha.execute();
  //     //     }, 200);
  //     //   });
  //     // }, 100);
  //   }
  // }, [captchaData]);

  useEffect(() => {
    const shippingAddresses = data?.cart?.shipping_addresses;
    if (shippingAddresses?.length) {
      const updatedState = {};
      if (shippingAddresses?.length) {
        // Step 1 complete
        updatedState.step1 = true;

        // step 2 complete
        if (shippingAddresses[0]?.selected_shipping_method?.carrier_code) {
          updatedState.step2 = true;
        }
      }
      setStepper(prevState => ({ ...prevState, ...updatedState }));
    }
  }, [data?.cart?.shipping_addresses]);

  return (
    <div className="checkoutPage-root-2Ja max-w-screen-lg mx-auto my-0 px-sm py-md lg_px-lg">
      <div className="checkoutPage-checkoutContent-7eb gap-xs grid grid-cols-1 lg_gap-md lg_grid-cols-[2fr,1fr]">
        <div className="checkoutPage-heading_container-YU7 col-span-1 col-start-1 gap-y-xs grid">
          <h1 className="checkoutPage-heading-1N3 leading-tight">Guest Checkout</h1>
        </div>
        <GuestSignInButton />
        {/* show step 1 */}
        {!stepper.step1 && !stepper.step2 && !stepper.step3 && (
          <>{!data?.cart?.shipping_addresses?.length && <Shipping />}</>
        )}

        {/* Show when Step 1 is complete */}
        {stepper.step1 && <ViewShippingCard data={data?.cart?.shipping_addresses?.[0]} />}
        {/* {stepper.step1 && !stepper.step2 && !stepper.step3 && ( */}
        <ShippingMethod
          canShowForm={stepper.step1 && !stepper.step2 && !stepper.step3}
          list={data?.cart?.shipping_addresses?.[0]?.available_shipping_methods}
        />
        {/* )} */}

        {/* Show when Step 1 & Step 2 is complete */}
        {stepper.step1 && stepper.step2 && (
          <ViewShippingMethodCard method={data?.cart?.shipping_addresses?.[0]?.selected_shipping_method} />
        )}

        {/* when step1 and step2 is complete */}
        <Payment
          showForm={stepper.step1 && stepper.step2 && !stepper.step3}
          showCard={stepper.step3}
          updateStepper={setStepper}
        />
        {/* when all steps are completed */}

        {stepper.step1 && stepper.step2 && stepper.step3 && (
          <>
            <ReviewOrder />
            <button
              onClick={placeOrderHandler}
              className="checkoutPage-place_order_button-3cq button-root_highPriority-1Zl button-root-17M border-2 border-solid cursor-pointer font-bold inline-flex items-center justify-center leading-tight max-w-full min-w-[10rem] outline-none pointer-events-auto px-sm rounded-full text-center text-sm uppercase disabled_bg-gray-400 disabled_border-gray-400 disabled_opacity-50 disabled_pointer-events-none disabled_text-white focus_shadow-inputFocus bg-brand-dark border-brand-dark text-white active_bg-brand-darkest active_border-brand-darkest active_text-white hover_bg-brand-darkest hover_border-brand-darkest hover_text-white m-auto"
              type="button">
              <span className="button-content-3wD gap-1.5 grid-flow-col inline-grid items-center justify-center justify-items-center">
                Place Order
              </span>
            </button>
          </>
        )}
        <OrderSummary />
        {/* <div className="googleReCaptcha-root-3TE mt-4" data-widget-id={0}>
          <div
            className="grecaptcha-badge"
            data-style="inline"
            style={{ width: 256, height: 60, boxShadow: 'gray 0px 0px 5px' }}>
            <div className="grecaptcha-logo">
              <iframe
                title="reCAPTCHA"
                width={256}
                height={60}
                role="presentation"
                name="a-7lha5731y0a"
                frameBorder={0}
                scrolling="no"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Lc1KW0dAAAAADtVR_BxrwFNQVxyCLwRLvSFGICK&co=aHR0cHM6Ly92ZW5pYS5tYWdlbnRvLmNvbTo0NDM.&hl=en-GB&v=Hq4JZivTyQ7GP8Kt571Tzodj&size=invisible&badge=inline&cb=8x715cutxjbc"
              />
            </div>
            <div className="grecaptcha-error" />
            <textarea
              id="g-recaptcha-response"
              name="g-recaptcha-response"
              className="g-recaptcha-response"
              style={{
                width: 250,
                height: 40,
                border: '1px solid rgb(193, 193, 193)',
                margin: '10px 25px',
                padding: 0,
                resize: 'none',
                display: 'none',
              }}
              defaultValue=""
            />
          </div>
          <iframe style={{ display: 'none' }} />
        </div> */}
      </div>
      <div className="g-recaptcha" data-sitekey={captchaKey} data-callback="onSubmit" data-size="invisible" />
    </div>
  );
};

export default Component;
