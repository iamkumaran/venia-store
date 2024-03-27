import React, { useEffect } from 'react';
import { useQuery } from 'urql';
import PaymentForm from './PaymentForm';
import ViewPaymentCard from './ViewPaymentCard';
import { getCartIdFromStorage } from '../../../../utils/helper';
import GET_PAYMENT_INFO_QUERY from '../../../../utils/gql/get-payment-info.gql';

const Payment = ({ updateStepper }) => {
  const [result] = useQuery({
    query: GET_PAYMENT_INFO_QUERY,
    variables: {
      cartId: getCartIdFromStorage(),
    },
    // pause: showForm || showCard,
  });
  const { data, fetching, error } = result;

  // update step 3 as complete.
  useEffect(() => {
    if (data?.cart?.selected_payment_method?.code) {
      updateStepper(prevState => ({
        ...prevState,
        ...{ step3: true },
      }));
    }
  }, [data?.cart?.selected_payment_method]);

  return (
    <>
      {!data?.cart?.selected_payment_method?.code && (
        <PaymentForm payments={data?.cart?.available_payment_methods} updateStepper={updateStepper} />
      )}
      {data?.cart?.selected_payment_method?.code && <ViewPaymentCard />}
    </>
  );
};

export default Payment;
