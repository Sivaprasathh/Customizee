import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FloatingLabel } from "react-bootstrap";
import "../index.css";
class Start extends React.Component {
  handleData = (e) => {
    e.preventDefault();
    console.log("this.props :", this.props);
  };

  render() {
    return (
      <div className="body-add">
        <div className="form-div-add">
          <Form className="form" onSubmit={this.handleData}>
            <h4 className="mb-5 title">About to start</h4>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                pattern="[a-zA-Z]+"
                name="character"
                placeholder="Enter your favorite character in GOT"
                required
              />
            </Form.Group>
            <FloatingLabel
              controlId="floatingTextarea"
              label="State it out, why ?"
              required
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <Button variant="warning" type="submit" className="submit-btn">
            <Link to="/main" className="btnn">
              Start
            </Link>
          </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Start;
