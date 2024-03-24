const REMOVE_ITEM_CART_MUTATION = `mutation removeItem($cartId: String!, $itemId: ID!) {
  removeItemFromCart(input: {cart_id: $cartId, cart_item_uid: $itemId}) {
    cart {
      id
      __typename
    }
    __typename
  }
}
`;

export default REMOVE_ITEM_CART_MUTATION;
