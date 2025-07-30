export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const setProducts = (Products) => {
  return {
    type: SET_PRODUCTS,
    payload: Products,
  };
};
export const setLoading = (Loading) => {
  return {
    type: SET_LOADING,
    payload: Loading,
  };
};
export const setError = (Error) => {
  return {
    type: SET_ERROR,
    payload: Error,
  };
};
