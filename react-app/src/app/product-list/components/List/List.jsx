import React from 'react';
import { useQuery } from 'urql';
import { PRODUCTS_QUERY } from '../../../../utils/gql/products.gql';

const List = () => {
  const [result] = useQuery({
    query: PRODUCTS_QUERY,
    variables: {
      currentPage: 1,
      id: 'MjE=',
      filters: {
        category_uid: {
          eq: 'MjE=',
        },
      },
      pageSize: 12,
      sort: {
        position: 'ASC',
      },
    },
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <ul>
      {data.products.items.map(item => (
        <li key={item.uid}>{item.name}</li>
      ))}
    </ul>
  );
};

export default List;
