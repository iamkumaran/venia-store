import { gql } from 'urql';
import CartTriggerFragment from './fragments/CartTriggerFragment.gql';

const CART_COUNT_QUERY = gql`
  query getItemCount($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      ...CartTriggerFragment
      __typename
    }
  }
  ${CartTriggerFragment}
`;

export default CART_COUNT_QUERY;
