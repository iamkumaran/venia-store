import { gql } from 'urql';

const GET_PRICE_SUMMARY_QUERY = gql`
  query getPriceSummary($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      ...PriceSummaryFragment
      __typename
    }
  }
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
  fragment DiscountSummaryFragment on CartPrices {
    discounts {
      amount {
        currency
        value
        __typename
      }
      label
      __typename
    }
    __typename
  }
  fragment GiftCardSummaryFragment on Cart {
    id
    applied_gift_cards {
      code
      applied_balance {
        value
        currency
        __typename
      }
      __typename
    }
    __typename
  }
  fragment GiftOptionsSummaryFragment on Cart {
    id
    prices {
      gift_options {
        printed_card {
          value
          currency
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  fragment GrandTotalFragment on CartPrices {
    grand_total {
      currency
      value
      __typename
    }
    __typename
  }
  fragment ShippingSummaryFragment on Cart {
    id
    shipping_addresses {
      selected_shipping_method {
        amount {
          currency
          value
          __typename
        }
        __typename
      }
      street
      __typename
    }
    __typename
  }
  fragment TaxSummaryFragment on CartPrices {
    applied_taxes {
      amount {
        currency
        value
        __typename
      }
      __typename
    }
    __typename
  }
`;

export default GET_PRICE_SUMMARY_QUERY;
