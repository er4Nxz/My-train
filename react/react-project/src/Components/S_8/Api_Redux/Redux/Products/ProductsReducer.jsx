import { SET_ERROR, SET_LOADING, SET_PRODUCTS } from "./ProductsAction";
let initialState = {
  products: [],
  loading: true,
  error: "",
};
const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return { ...state, products: action.payload };
    }
    case SET_LOADING: {
      return { ...state, loading: action.payload };
    }
    case SET_ERROR: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

export default ProductsReducer;
