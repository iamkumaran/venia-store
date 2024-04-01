import React from 'react';
import { useQuery } from 'urql';
import GET_PRICE_SUMMARY_QUERY from '../../../../utils/gql/get-price-summary.gql';
import { getCartIdFromStorage } from '../../../../utils/helper';
import PriceSummary from '../../../../library/PriceSummary/PriceSummary';
import APIFail from '../../../../library/Error/APIFail';

const OrderSummary = () => {
  // get price query
  const [result] = useQuery({
    query: GET_PRICE_SUMMARY_QUERY,
    variables: {
      cartId: getCartIdFromStorage(),
    },
  });

  const { data, fetching, error } = result;
  if (fetching) return <p>Loading...</p>;
  if (error) return <APIFail error={error} />;

  return (
    <div className="checkoutPage-summaryContainer-2bL lg_h-minContent lg_sticky lg_top-[6rem] checkoutPage-signInContainerVisible-2ey checkoutPage-reCaptchaMargin-1IR">
      <div className="orderSummary-root-pTK border-t-2 border-solid border-subtle mt-xs pt-md lg_border-2 lg_border-solid lg_border-subtle lg_rounded-md lg_mt-0 lg_p-md">
        <h1 aria-live="polite" className="orderSummary-title-1_f sr-only">
          Order Summary
        </h1>
        <PriceSummary prices={data.cart.prices} />
      </div>
    </div>
  );
};

export default OrderSummary;
