import React, { Component } from "react";
import { Row, Col } from "antd";

export default class Title extends Component {
  render() {
    return (
      <Row
        type="flex"
        justify="flex-start"
        align="middle"
        style={{ minHeight: "100vh" }}
      >
        <h1 style={{fontFamily:"Poppins", margin:"10px"}}>
          Making your dream jeans using recycled fibers, energy, and water.
        </h1>
      </Row>
    );
  }
}
