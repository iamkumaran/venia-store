import React, { useState } from 'react';
import { useMutation } from 'urql';
import CREATE_CART_MUTATION from '../../utils/gql/create-cart.gql';
import { CART_TOKEN_KEY } from '../../utils/config/constants';
import { getCartIdFromStorage } from '../../utils/helper';

const InitCart = ({ children }) => {
  const [, triggerCall] = useMutation(CREATE_CART_MUTATION);
  const [oneTimer, setOneTimer] = useState(true);

  if (oneTimer) {
    const id = getCartIdFromStorage();
    if (!id) {
      triggerCall().then(resp => {
        if (resp.error) {
          return new Error('Cart Id generation failed');
        }
        console.log('cart call response', resp);
        const { cartId } = resp?.data || {};
        localStorage.setItem(CART_TOKEN_KEY, JSON.stringify({ timeStored: Date.now(), cartId }));
        return cartId;
      });
    }
    setOneTimer(false);
  }
  // console.log('createCartResult', triggerCall())
  // useEffect(() => {
  //
  // }, []);
  return <>{children}</>;
};

export default InitCart;
