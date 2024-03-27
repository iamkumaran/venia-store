import { gql } from 'urql';

const GET_ITEMS_CART_QUERY = gql`
  query getItemsInCart($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      ...ItemsReviewFragment
      __typename
    }
  }
  fragment ItemsReviewFragment on Cart {
    id
    total_quantity
    items {
      uid
      product {
        uid
        sku
        name
        thumbnail {
          url
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
      ... on ConfigurableCartItem {
        configurable_options {
          configurable_product_option_uid
          option_label
          configurable_product_option_value_uid
          value_label
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
`;

export default GET_ITEMS_CART_QUERY;
