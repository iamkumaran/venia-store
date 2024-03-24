import React from 'react';
import GuestSignInButton from './SignIn/GuestSignInButton';
import Shipping from './Shipping/Shipping';
import ShippingMethod from './Shipping/ShippingMethod';
import Payment from './Payment/Payment';
import OrderSummary from './OrderSummary/OrderSummary';

const Component = () => {
  // if (fetching) return <p>Loading...</p>;
  // if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div className="checkoutPage-root-2Ja max-w-screen-lg mx-auto my-0 px-sm py-md lg_px-lg">
      <div className="checkoutPage-checkoutContent-7eb gap-xs grid grid-cols-1 lg_gap-md lg_grid-cols-[2fr,1fr]">
        <div className="checkoutPage-heading_container-YU7 col-span-1 col-start-1 gap-y-xs grid">
          <h1 className="checkoutPage-heading-1N3 leading-tight">Guest Checkout</h1>
        </div>
        <GuestSignInButton />
        <Shipping />
        <ShippingMethod />
        <Payment />
        <OrderSummary />
        <div className="googleReCaptcha-root-3TE mt-4" data-widget-id={0}>
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
        </div>
      </div>
    </div>
  );
};

export default Component;
