import AvailableShippingMethodsCartFragment from '../fragments/AvailableShippingMethodsCartFragment.gql';
import CartPageFragment from '../fragments/CartPageFragment.gql';

const UPDATE_CART_MUTATION = `
  mutation updateItemQuantity($cartId: String!, $itemId: ID!, $quantity: Float!) {
    updateCartItems(input: { cart_id: $cartId, cart_items: [{ cart_item_uid: $itemId, quantity: $quantity }] }) {
      cart {
        id
        ...CartPageFragment
        ...AvailableShippingMethodsCartFragment
        __typename
      }
      __typename
    }
  }
  ${CartPageFragment}
  ${AvailableShippingMethodsCartFragment}
`;

export default UPDATE_CART_MUTATION;
