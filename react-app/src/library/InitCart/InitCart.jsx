import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'urql';
import CREATE_CART_MUTATION from '../../utils/gql/mutations/create-cart.gql';
import { CART_TOKEN_KEY } from '../../utils/config/constants';
import { getCartIdFromStorage, updateDomCartCount } from '../../utils/helper';
import CART_COUNT_QUERY from '../../utils/gql/cart-count.gql';

const InitCart = ({ children }) => {
  const [cartIdState, setCartIdState] = useState(getCartIdFromStorage());
  const [, triggerCall] = useMutation(CREATE_CART_MUTATION);
  const [oneTimer, setOneTimer] = useState(true);

  const [result, getCartCount] = useQuery({
    query: CART_COUNT_QUERY,
    variables: { cartId: cartIdState },
    // this is required when useMutation call happens this query is getting executed unnecessary.
    pause: true,
  });

  const { data, fetching, error } = result;

  if (oneTimer) {
    setOneTimer(false);
    const id = cartIdState;
    if (!id) {
      triggerCall().then(resp => {
        if (resp.error) {
          return new Error('Cart Id generation failed');
        }
        console.log('cart call response', resp);
        const { cartId } = resp?.data || {};
        localStorage.setItem(CART_TOKEN_KEY, JSON.stringify({ timeStored: Date.now(), cartId }));
        setCartIdState(() => {
          // make gql call to get cart count after state update
          setTimeout(getCartCount, 0);
          return cartId;
        });
        return cartId;
      });
    } else {
      // make gql call to get cart count
      getCartCount();
    }
  }
  // console.log('createCartResult', triggerCall())
  useEffect(() => {
    if (!fetching && data?.cart?.total_quantity) {
      console.log('CART_COUNT_QUERY', data, fetching);
      updateDomCartCount(data.cart.total_quantity);
    }
  }, [data, fetching]);
  return <>{children}</>;
};

export default InitCart;
