import AppliedCouponsFragment from './AppliedCouponsFragment.gql';
import GiftCardFragment from './GiftCardFragment.gql';
import ProductListingFragment from './ProductListingFragment.gql';
import PriceSummaryFragment from './PriceSummaryFragment.gql';

export default `
  fragment CartPageFragment on Cart {
    id
    total_quantity
    ...AppliedCouponsFragment
    ...GiftCardFragment
    ...ProductListingFragment
    ...PriceSummaryFragment
    __typename
  }
  ${AppliedCouponsFragment}
  ${GiftCardFragment}
  ${ProductListingFragment}
  ${PriceSummaryFragment}
`;
