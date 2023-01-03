import * as actionTypes from '../constants/productConstants';

export const getProductsReducer = (state = { products: [], allProducts: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
        allProducts: [],
      };

    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        allProducts: action.payload,
      };

    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload
      };

    case actionTypes.FILTER_BY_CATEGORIES:
      const allCategories = state.allProducts
      const filterCon = action.payload === 'All'
        ? allCategories : allCategories.filter(el => {
          return el.category === action.payload
        })
      return {
        ...state,
        products: filterCon
      }

    default:
      return state;
  };
};

export const getProductsDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return {
        product: {},
      };
    default:
      return state;
  };
};
