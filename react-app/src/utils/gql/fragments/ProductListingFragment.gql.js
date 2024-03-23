export default `
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
`;
