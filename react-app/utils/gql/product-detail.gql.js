import { gql } from 'urql';
import ProductDetailsFragment from './fragments/ProductDetailsFragment.gql';

const PRODUCT_DETAIL_QUERY = gql`
  query getProductDetailForProductPage($urlKey: String!) {
    products(filter: { url_key: { eq: $urlKey } }) {
      items {
        id
        uid
        ...ProductDetailsFragment
        __typename
      }
      __typename
    }
  }
  ${ProductDetailsFragment}
`;

export default PRODUCT_DETAIL_QUERY;
