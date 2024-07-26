export default `
  fragment GrandTotalFragment on CartPrices {
    grand_total {
      currency
      value
      __typename
    }
    __typename
  }
`;
