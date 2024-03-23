export default `
  fragment AppliedCouponsFragment on Cart {
    id
    applied_coupons {
      code
      __typename
    }
    __typename
  }
`;
