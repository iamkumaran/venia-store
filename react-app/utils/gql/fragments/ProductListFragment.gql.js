export default `
  fragment ProductListFragment on Cart {
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
        stock_status
        ... on ConfigurableProduct {
          variants {
            attributes {
              uid
              __typename
            }
            product {
              uid
              thumbnail {
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
