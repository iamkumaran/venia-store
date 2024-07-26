import React, { Fragment } from 'react';
import { useQuery } from 'urql';
import FilterListSub from './FilterListSub';
import FILTERS_QUERY from '../../../../utils/gql/filters.gql';
import APIFail from '../../../../library/Error/APIFail';

const FilterList = ({ uid }) => {
  const [result] = useQuery({
    query: FILTERS_QUERY,
    variables: { categoryIdFilter: { eq: uid } },
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <APIFail error={error} />;
  return (
    <ul className="filterSidebar-blocks-BxH pb-0 pt-xs px-xs">
      {data.products.aggregations.map(item => (
        <Fragment key={item.attribute_code}>
          {item.attribute_code !== 'category_uid' && <FilterListSub item={item} />}
        </Fragment>
      ))}
    </ul>
  );
};

export default FilterList;
