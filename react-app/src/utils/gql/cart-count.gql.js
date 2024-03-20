import { gql } from 'urql';

const CART_COUNT_QUERY = gql`
  query getItemCount($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      ...CartTriggerFragment
      __typename
    }
  }
  fragment CartTriggerFragment on Cart {
    id
    total_quantity
    total_summary_quantity_including_config
    __typename
  }
`;

export default CART_COUNT_QUERY;
