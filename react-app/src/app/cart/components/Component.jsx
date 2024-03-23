import React from 'react';
import { useQuery } from 'urql';
import CartOptions from './CartOptions';
import ProductItem from './CartSections/ProductItem';
import PriceSummary from './CartSections/PriceSummary';
import GET_CART_DETAILS_QUERY from '../../../utils/gql/get-cart-details.gql';
import { getCartIdFromStorage } from '../../../utils/helper';

const Component = () => {
  const [result] = useQuery({
    query: GET_CART_DETAILS_QUERY,
    variables: {
      cartId: getCartIdFromStorage(),
    },
  });

  const { data, fetching, error } = result;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div className="main-page-3Fo max-w-site mx-auto my-0">
      <div className="cartPage-body-3FT grid gap-md">
        <div className="cartPage-items_container-1RJ">
          <ul className="productListing-root-1Vx gap-x-md gap-y-xs grid">
            {data.cart.items.map(item => (
              <ProductItem key={`cart-item-${item.uid}`} item={item} />
            ))}
          </ul>
        </div>
        <CartOptions />
        <PriceSummary prices={data.cart.prices} />
      </div>
    </div>
  );
};

export default Component;
