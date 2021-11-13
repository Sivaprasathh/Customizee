import React from "react";
import Display from "./Display";
import "../index.css";
import {  Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Favorites from "./Favorites";
class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="row">
            <div className="col-md-6">
              <Display />
            </div>

            <div className="col-md-6">
              <Favorites />
            </div>
          </div>
        </div>
        <div className="submit">
          <Button variant="warning" type="submit" className="submit-btn">
            <Link to="/" className="btnn">
              Back
            </Link>
          </Button>
        </div>
      </div>
    );
  }
}
export default Main;
