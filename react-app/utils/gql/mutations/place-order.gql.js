const PLACE_ORDER_MUTATION = `
mutation placeOrder($cartId: String!) {
  placeOrder(input: {cart_id: $cartId}) {
    order {
      order_number
      __typename
    }
    __typename
  }
}
`;

export default PLACE_ORDER_MUTATION;
