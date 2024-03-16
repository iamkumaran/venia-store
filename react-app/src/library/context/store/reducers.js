import { ACTION } from './actions';

/**
 * Method to set selected filters
 * @param {Object} state
 * @param {String} customer
 * @returns Updated state
 */
const setSelectedFilters = (state, filter, bool) => {
  const selectedFilter = structuredClone(state.selectedFilter);
  // if (list.length) { // commented because default is empty array
  // check if the value already exist in state.
  const index = selectedFilter.findIndex(item => item.key === filter.key && item.value === filter.value);
  if (index > -1) {
    // if checkbox unchecked
    if (!bool) {
      selectedFilter.splice(index, 1);
    }
  } else {
    selectedFilter.push(filter);
  }
  // }
  return {
    ...state,
    selectedFilter,
  };
};

const setProductCount = (state, productsCount) => {
  return {
    ...state,
    productsCount,
  };
};

// reducers
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.SET_SELECTED_FILTERS:
      return setSelectedFilters(state, action.payload, action.bool);
    case ACTION.SET_PRODUCT_COUNT:
      return setProductCount(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
