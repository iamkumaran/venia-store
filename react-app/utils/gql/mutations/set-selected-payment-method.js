const SET_SELECTED_PAYMENT_METHOD = `
mutation setSelectedPaymentMethod($cartId: String!, $paymentNonce: String!) {
  setPaymentMethodOnCart(
    input: {
      cart_id: $cartId,
      payment_method: {
        code: "braintree", 
        braintree: {
          payment_method_nonce: $paymentNonce, is_active_payment_token_enabler: false}
        }
      }
  ) {
    cart {
      id
      selected_payment_method {
        code
        title
        __typename
      }
      __typename
    }
    __typename
  }
}
`;

export default SET_SELECTED_PAYMENT_METHOD;
