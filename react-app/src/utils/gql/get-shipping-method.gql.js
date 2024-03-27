import { gql } from 'urql';
import AvailableShippingMethodsCheckoutFragment from './fragments/AvailableShippingMethodsCheckoutFragment.gql';
import SelectedShippingMethodCheckoutFragment from './fragments/SelectedShippingMethodCheckoutFragment.gql';
import ShippingInformationFragment from './fragments/ShippingInformationFragment.gql';

const GET_SHIPPING_METHOD_QUERY = gql`
  query getSelectedAndAvailableShippingMethods($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      ...AvailableShippingMethodsCheckoutFragment
      ...SelectedShippingMethodCheckoutFragment
      ...ShippingInformationFragment
      __typename
    }
  }
  ${AvailableShippingMethodsCheckoutFragment}
  ${SelectedShippingMethodCheckoutFragment}
  ${ShippingInformationFragment}
`;
export default GET_SHIPPING_METHOD_QUERY;
