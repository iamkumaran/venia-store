export default `fragment AvailablePaymentMethodsFragment on Cart {
  id
  available_payment_methods {
    code
    title
    __typename
  }
  __typename
}`;
