import {
  FETCH_PENDING,
  FETCH_SUCCESS,
  ADD_CHARACTER,
  REMOVE_CHARACTER,
  
} from "../actions";

const initialState = {
  pending: false,
  products: [],
  favo: [],
};

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        pending: false,
        products: action.products,
      };
    case ADD_CHARACTER:  
      let arr = [...state.favo, action.name];
      return {
        ...state,
        products: state.products.filter((namee) => action.name !== namee),
        favo: arr,
      };

    case REMOVE_CHARACTER:
      let arrr = [...state.products, action.name];
      
      return {
        ...state,
        favo: state.favo.filter((namee) => action.name !== namee),
        products: arrr,
      };

    default:
      return state;
  }
}

export const getProducts = (state) => state.products;
export const getProductsPending = (state) => state.pending;
export const getFavorites = (state) => state.favo;
