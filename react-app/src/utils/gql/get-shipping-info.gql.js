import { gql } from 'urql';
import ShippingInformationFragment from './fragments/ShippingInformationFragment.gql';

const GET_SHIPPING_INFO_QUERY = gql`
  query GetShippingInformation($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      ...ShippingInformationFragment
      __typename
    }
  }
  ${ShippingInformationFragment}
`;

export default GET_SHIPPING_INFO_QUERY;
