import AvailablePaymentMethodsFragment from '../fragments/AvailablePaymentMethodsFragment.gql';
import PriceSummaryFragment from '../fragments/PriceSummaryFragment.gql';
import ShippingInformationFragment from '../fragments/ShippingInformationFragment.gql';
import ShippingMethodsCheckoutFragment from '../fragments/ShippingMethodsCheckoutFragment.gql';

const SET_GUEST_SHIPPING_MUTATION = `
mutation SetGuestShipping($cartId: String!, $email: String!, $address: CartAddressInput!) {
  setGuestEmailOnCart(input: {cart_id: $cartId, email: $email}) {
    cart {
      id
      __typename
    }
    __typename
  }
  setShippingAddressesOnCart(
    input: {cart_id: $cartId, shipping_addresses: [{address: $address}]}
  ) {
    cart {
      id
      ...ShippingInformationFragment
      ...ShippingMethodsCheckoutFragment
      ...PriceSummaryFragment
      ...AvailablePaymentMethodsFragment
      __typename
    }
    __typename
  }
}
${ShippingInformationFragment}
${ShippingMethodsCheckoutFragment}
${PriceSummaryFragment}
${AvailablePaymentMethodsFragment}
`;

export default SET_GUEST_SHIPPING_MUTATION;
