export default `
  fragment ProductsFragment on Products {
    items {
      id
      uid
      name
      price_range {
        maximum_price {
          final_price {
            currency
            value
            __typename
          }
          regular_price {
            currency
            value
            __typename
          }
          discount {
            amount_off
            __typename
          }
          __typename
        }
        __typename
      }
      sku
      small_image {
        url
        __typename
      }
      stock_status
      rating_summary
      __typename
      url_key
    }
    page_info {
      total_pages
      __typename
    }
    total_count
    __typename
  }
`;
