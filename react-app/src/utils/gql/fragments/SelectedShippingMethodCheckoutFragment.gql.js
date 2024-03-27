export default `fragment SelectedShippingMethodCheckoutFragment on Cart {
  id
  shipping_addresses {
    selected_shipping_method {
      amount {
        currency
        value
        __typename
      }
      carrier_code
      method_code
      method_title
      __typename
    }
    street
    __typename
  }
  __typename
}`;
