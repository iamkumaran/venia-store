import DiscountSummaryFragment from './DiscountSummaryFragment.gql';
import GiftCardSummaryFragment from './GiftCardSummaryFragment.gql';
import GiftOptionsSummaryFragment from './GiftOptionsSummaryFragment.gql';
import GrandTotalFragment from './GrandTotalFragment.gql';
import ShippingSummaryFragment from './ShippingSummaryFragment.gql';
import TaxSummaryFragment from './TaxSummaryFragment.gql';

export default `
  fragment PriceSummaryFragment on Cart {
    id
    items {
      uid
      quantity
      __typename
    }
    ...ShippingSummaryFragment
    prices {
      ...TaxSummaryFragment
      ...DiscountSummaryFragment
      ...GrandTotalFragment
      subtotal_excluding_tax {
        currency
        value
        __typename
      }
      subtotal_including_tax {
        currency
        value
        __typename
      }
      __typename
    }
    ...GiftCardSummaryFragment
    ...GiftOptionsSummaryFragment
    __typename
  }

  ${ShippingSummaryFragment}
  ${TaxSummaryFragment}
  ${DiscountSummaryFragment}
  ${GrandTotalFragment}
  ${GiftCardSummaryFragment}
  ${GiftOptionsSummaryFragment}
`;
