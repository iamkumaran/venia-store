export default `fragment ShippingInformationFragment on Cart {
  id
  email
  shipping_addresses {
    city
    country {
      code
      label
      __typename
    }
    firstname
    lastname
    postcode
    region {
      code
      label
      region_id
      __typename
    }
    street
    telephone
    __typename
  }
  __typename
}`;
