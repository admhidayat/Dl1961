import React, { Component } from "react";
import { Button, Row, Col } from "antd";
import stitch_tonal from "../images/stitch_tonal.png";
import stitch_contrast from "../images/stitch_contrast.png";

export default class Stitching extends Component {
  render() {
    return (
      <div
        style={{
          background: "rgb(34,56,65)",
          background:
            "linear-gradient(0deg, rgba(34,56,65,1) 0%, rgba(137,145,165,1) 68%)",
        }}
      >
        <p style={{ position: "absolute", margin: "15px", color: "white" }}>
          Stitching
        </p>

        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ height: "100vh" , width:"100%"}}
        >
          <Row
            style={{
              display: "flex",
              justifyContent: "space-between",
              width:"100%"
            }}
          >
              <div>
              <img
                style={{ width: "210px", height: "280px" }}
                src={stitch_tonal}
              />
              </div>
              <div>
              <img
                style={{  width: "210px", height: "280px" }}
                src={stitch_contrast}
              />
              </div>
            
          </Row>
        </Row>
      </div>
    );
  }
}
