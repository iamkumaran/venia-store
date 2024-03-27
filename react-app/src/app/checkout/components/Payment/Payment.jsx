import React, { useEffect } from 'react';
import { useQuery } from 'urql';
import PaymentForm from './PaymentForm';
import ViewPaymentCard from './ViewPaymentCard';
import { getCartIdFromStorage } from '../../../../utils/helper';
import GET_PAYMENT_INFO_QUERY from '../../../../utils/gql/get-payment-info.gql';

const Payment = ({ showForm, showCard = false, updateStepper }) => {
  const [result] = useQuery({
    query: GET_PAYMENT_INFO_QUERY,
    variables: {
      cartId: getCartIdFromStorage(),
    },
    pause: showForm || showCard,
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
    <div className="checkoutPage-payment_information_container-3Cs">
      <h3 className="checkoutPage-payment_information_heading-1Ud checkoutPage-stepper_heading-3Do border-b border-solid border-subtle font-semibold pb-xs text-colorDefault uppercase lg_pb-md border-b-0 lg_border-b">
        3. Payment Information
      </h3>
      {!data?.cart?.selected_payment_method && (
        <PaymentForm payments={data?.cart?.available_payment_methods} updateStepper={updateStepper} />
      )}
      {data?.cart?.selected_payment_method?.code && <ViewPaymentCard />}
    </div>
  );
};

export default Payment;
