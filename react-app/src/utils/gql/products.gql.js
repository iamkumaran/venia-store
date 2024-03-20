import { gql } from 'urql';

const PRODUCTS_QUERY = gql`
  query GetCategories(
    $id: String!
    $pageSize: Int!
    $currentPage: Int!
    $filters: ProductAttributeFilterInput!
    $sort: ProductAttributeSortInput
  ) {
    categories(filters: { category_uid: { in: [$id] } }) {
      items {
        uid
        ...CategoryFragment
        __typename
      }
      __typename
    }
    products(pageSize: $pageSize, currentPage: $currentPage, filter: $filters, sort: $sort) {
      ...ProductsFragment
      __typename
    }
  }
  fragment CategoryFragment on CategoryTree {
    uid
    meta_title
    meta_keywords
    meta_description
    __typename
  }
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

export default PRODUCTS_QUERY;
