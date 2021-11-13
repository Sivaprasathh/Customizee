export const FETCH_PENDING = "FETCH_PENDING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";
export function fetchProductsPending() {
  return {
    type: FETCH_PENDING,
  };
}

export function fetchProductsSuccess(products) {
  return {
    type: FETCH_SUCCESS,
    products: products,
  };
}

export function addCharacterById(name) {
  return {
    type: ADD_CHARACTER,
    name: name,
  };
}
export function removeCharacterById(name) {
  return {
    type: REMOVE_CHARACTER,
    name: name,
  };
}
