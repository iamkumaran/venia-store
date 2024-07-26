export default `
  fragment GiftCardFragment on Cart {
    applied_gift_cards {
      code
      current_balance {
        currency
        value
        __typename
      }
      __typename
    }
    id
    __typename
  }
`;
