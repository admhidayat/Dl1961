import React, { Component } from "react";
import { Row, Slider, Switch, Input } from "antd";
import "./slider.css";
export default class Fabric extends Component {
  state = {
    disabled: false,
    sliderValue:50
  };
  handleDisabledChange = (disabled) => {
    this.setState({ disabled });
  };
  handleValueChange = (e) => {
    this.setState({ sliderValue :e.target.value});
  };
  render() {
    const { disabled } = this.state;

    return (
      <>
        <p style={{ position: "absolute", margin: "15px" }}>Fabric</p>
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ minHeight: "100vh" }}
        >
          <div
            style={{
              display: "flex",
              width: "50%",
              height: "80px",
            }}
          >
            <p style={{marginTop:"5px", marginRight:"4px"}}>Stretch</p>
            <input
              type="range"
              min="1"
              max="100"
              onChange={this.handleValueChange}
              value={this.state.value}
              className="slider"
              id="range"
            />
            <p style={{marginTop:"5px", marginLeft:"4px"}}>Rigid</p>
          </div>
        </Row>
      </>
    );
  }
}
