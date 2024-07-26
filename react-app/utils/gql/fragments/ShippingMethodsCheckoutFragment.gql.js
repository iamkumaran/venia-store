import AvailableShippingMethodsCheckoutFragment from './AvailableShippingMethodsCheckoutFragment.gql';
import SelectedShippingMethodCheckoutFragment from './SelectedShippingMethodCheckoutFragment.gql';

export default `fragment ShippingMethodsCheckoutFragment on Cart {
  id
  ...AvailableShippingMethodsCheckoutFragment
  ...SelectedShippingMethodCheckoutFragment
  shipping_addresses {
    country {
      code
      __typename
    }
    postcode
    region {
      code
      __typename
    }
    street
    __typename
  }
  __typename
}
${AvailableShippingMethodsCheckoutFragment}
${SelectedShippingMethodCheckoutFragment}
`;
