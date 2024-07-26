import { gql } from 'urql';
import CartPageFragment from './fragments/CartPageFragment.gql';

const GET_CART_DETAILS_QUERY = gql`
  query GetCartDetails($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      ...CartPageFragment
      __typename
    }
  }
  ${CartPageFragment}
`;

export default GET_CART_DETAILS_QUERY;
