import React from "react";
import { addCharacterById } from "../actions";
import "../index.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchProductsAction from "../reducers/fetch";
import { getProducts, getProductsPending } from "../reducers/index";
class Display extends React.Component {
  componentWillMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    const { products, pending } = this.props;

    
    return (
      <div>
        <div className="container">
          <h4 className="title">Your Favorites</h4>
          {products.length === 0
            ? ""
            : products.map((prod) => {
                return (
                  <li className="list-group-item">
                    <div className="list-item">{prod}</div>
                    <div
                      className="list-item right-button"
                      onClick={() => this.props.addCharacterById(prod)}
                    >
                      +
                    </div>
                  </li>
                );
              })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: getProductsPending(state),
  products: getProducts(state),
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchProducts: fetchProductsAction,
      addCharacterById,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Display);
