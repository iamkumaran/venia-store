import { gql } from 'urql';
import CategoryFragment from './fragments/CategoryFragment.gql';
import ProductsFragment from './fragments/ProductsFragment.gql';

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
  ${CategoryFragment}
  ${ProductsFragment}
`;

export default PRODUCTS_QUERY;
