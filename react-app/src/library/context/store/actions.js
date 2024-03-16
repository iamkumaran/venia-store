export const ACTION = {
  SET_SELECTED_FILTERS: 'SET_SELECTED_FILTERS',
  SET_PRODUCT_COUNT: 'SET_PRODUCT_COUNT',
};

export const setSelectedFilters = (payload, bool) => ({
  type: ACTION.SET_SELECTED_FILTERS,
  payload,
  bool,
});

export const setProductCount = payload => ({
  type: ACTION.SET_PRODUCT_COUNT,
  payload,
});
