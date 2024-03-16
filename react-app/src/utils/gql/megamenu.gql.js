import { gql } from 'urql';

const MEGA_MENU_QUERY = gql`
  query getMegaMenu {
    categoryList {
      uid
      name
      children {
        uid
        include_in_menu
        name
        position
        url_path
        children {
          uid
          include_in_menu
          name
          position
          url_path
          children {
            uid
            include_in_menu
            name
            position
            url_path
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;

export default MEGA_MENU_QUERY;
