import CartTriggerFragment from '../fragments/CartTriggerFragment.gql';
import MiniCartFragment from '../fragments/MiniCartFragment.gql';

const ADD_TO_CART_MUTATION = `mutation AddProductToCart($cartId: String!, $product: CartItemInput!) {
  addProductsToCart(cartId: $cartId, cartItems: [$product]) {
    cart {
      id
      ...CartTriggerFragment
      ...MiniCartFragment
      __typename
    }
    user_errors {
      code
      message
      __typename
    }
    __typename
  }
}
${CartTriggerFragment}
${MiniCartFragment}
`;

export default ADD_TO_CART_MUTATION;
