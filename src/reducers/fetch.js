import { fetchProductsPending, fetchProductsSuccess } from "../actions/index";

function fetchProducts() {
  return (dispatch) => {
    
    dispatch(fetchProductsPending());
    var chars = [];
    fetch("https://anapioficeandfire.com/api/characters/583")
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }

        dispatch(fetchProductsSuccess(res.aliases));
      })
      .catch((error) => {});
  };
}

export default fetchProducts;
