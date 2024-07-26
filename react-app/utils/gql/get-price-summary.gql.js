import { gql } from 'urql';
import PriceSummaryFragment from './fragments/PriceSummaryFragment.gql';

const GET_PRICE_SUMMARY_QUERY = gql`
  query getPriceSummary($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      ...PriceSummaryFragment
      __typename
    }
  }
  ${PriceSummaryFragment}
`;

export default GET_PRICE_SUMMARY_QUERY;
