import { gql } from 'urql';

export const FILTERS_QUERY = gql`
  query getProductFiltersByCategory($categoryIdFilter: FilterEqualTypeInput!) {
    products(filter: { category_uid: $categoryIdFilter }) {
      aggregations {
        label
        count
        attribute_code
        options {
          label
          value
          __typename
        }
        position
        __typename
      }
      __typename
    }
  }
`;
