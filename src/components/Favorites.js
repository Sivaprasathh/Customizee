import React, { Component } from "react";

import { removeCharacterById } from "../actions";
import "../index.css";
import { connect } from "react-redux";

import { getFavorites } from "../reducers";

class Favorites extends Component {
  render() {
    const { favos } = this.props;
    console.log(favos);
    return (
      <div>
        <h4>Your Hero Squad</h4>
        <ul className="list-group">
          {favos.length === 0
            ? ""
            : favos.map((prod) => {
                return (
                  <li className="list-group-item">
                    <div className="list-item">{prod}</div>
                    <div
                      className="list-item right-button"
                      onClick={() => this.props.removeCharacterById(prod)}
                    >
                      -
                    </div>
                  </li>
                );
              })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favos: getFavorites(state),
});

export default connect(mapStateToProps, { removeCharacterById })(Favorites);
