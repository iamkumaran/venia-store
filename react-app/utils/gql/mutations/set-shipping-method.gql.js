import AvailableShippingMethodsCheckoutFragment from '../fragments/AvailableShippingMethodsCheckoutFragment.gql';
import PriceSummaryFragment from '../fragments/PriceSummaryFragment.gql';
import SelectedShippingMethodCheckoutFragment from '../fragments/SelectedShippingMethodCheckoutFragment.gql';
import ShippingInformationFragment from '../fragments/ShippingInformationFragment.gql';

const SET_SHIPPING_METHOD_MUTATION = `
mutation SetShippingMethod($cartId: String!, $shippingMethod: ShippingMethodInput!) {
  setShippingMethodsOnCart(
    input: {cart_id: $cartId, shipping_methods: [$shippingMethod]}
  ) {
    cart {
      id
      available_payment_methods {
        code
        title
        __typename
      }
      ...SelectedShippingMethodCheckoutFragment
      ...PriceSummaryFragment
      ...ShippingInformationFragment
      ...AvailableShippingMethodsCheckoutFragment
      __typename
    }
    __typename
  }
}
${AvailableShippingMethodsCheckoutFragment}
${SelectedShippingMethodCheckoutFragment}
${PriceSummaryFragment}
${ShippingInformationFragment}
`;

export default SET_SHIPPING_METHOD_MUTATION;
