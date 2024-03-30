import React, { useEffect } from 'react';
import { useMutation, useQuery } from 'urql';
import CartOptions from './CartOptions';
import ProductItem from './CartSections/ProductItem';
import PriceSummarySection from './CartSections/PriceSummarySection';
import GET_CART_DETAILS_QUERY from '../../../utils/gql/get-cart-details.gql';
import { getCartIdFromStorage, updateDomCartCount } from '../../../utils/helper';
import UPDATE_CART_MUTATION from '../../../utils/gql/mutations/update-cart-items.gql';
import REMOVE_ITEM_CART_MUTATION from '../../../utils/gql/mutations/remove-item-cart.gql';
import CartGhost from './CartSections/CartGhost';

const Component = () => {
  // update cart mutation
  const [, updateCartItemsCall] = useMutation(UPDATE_CART_MUTATION);
  // delate item mutation
  const [, removeCartItemCall] = useMutation(REMOVE_ITEM_CART_MUTATION);

  // get cart query
  const [result] = useQuery({
    query: GET_CART_DETAILS_QUERY,
    variables: {
      cartId: getCartIdFromStorage(),
    },
  });

  const { data, fetching, error } = result;

  // update cart number in header
  useEffect(() => {
    if (!fetching && data?.cart?.total_quantity) {
      updateDomCartCount(data.cart.total_quantity);
    }
  }, [data, fetching]);

  if (fetching) return <CartGhost />;
  // if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div className="main-page-3Fo max-w-site mx-auto my-0">
      <div className="cartPage-body-3FT grid gap-md">
        <div className="cartPage-items_container-1RJ">
          <ul className="productListing-root-1Vx gap-x-md gap-y-xs grid">
            {data.cart.items.map(item => (
              <ProductItem
                key={`cart-item-${item.uid}`}
                item={item}
                updateCartItemsCall={updateCartItemsCall}
                removeCartItemCall={removeCartItemCall}
              />
            ))}
          </ul>
        </div>
        <CartOptions />
        <PriceSummarySection prices={data.cart.prices} />
      </div>
    </div>
  );
};

export default Component;
