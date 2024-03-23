import { gql } from 'urql';

const GET_CART_DETAILS_QUERY = gql`
  query GetCartDetails($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      ...CartPageFragment
      __typename
    }
  }
  fragment CartPageFragment on Cart {
    id
    total_quantity
    ...AppliedCouponsFragment
    ...GiftCardFragment
    ...ProductListingFragment
    ...PriceSummaryFragment
    __typename
  }
  fragment AppliedCouponsFragment on Cart {
    id
    applied_coupons {
      code
      __typename
    }
    __typename
  }
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
  fragment ProductListingFragment on Cart {
    id
    items {
      uid
      product {
        uid
        name
        sku
        url_key
        thumbnail {
          url
          __typename
        }
        small_image {
          url
          __typename
        }
        stock_status
        ... on ConfigurableProduct {
          variants {
            attributes {
              uid
              code
              value_index
              __typename
            }
            product {
              uid
              stock_status
              small_image {
                url
                __typename
              }
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
      prices {
        price {
          currency
          value
          __typename
        }
        row_total {
          value
          __typename
        }
        total_item_discount {
          value
          __typename
        }
        __typename
      }
      quantity
      errors {
        code
        message
        __typename
      }
      ... on ConfigurableCartItem {
        configurable_options {
          id
          configurable_product_option_uid
          option_label
          configurable_product_option_value_uid
          value_label
          value_id
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
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

export default GET_CART_DETAILS_QUERY;
