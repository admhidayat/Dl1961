import React, { Component } from "react";
import wash1 from "../images/wash1.png";
import wash2 from "../images/wash2.png";
import wash3 from "../images/wash3.png";
import wash4 from "../images/wash4.png";
import wash5 from "../images/wash5.png";
import wash6 from "../images/wash6.png";

import { Row, Col } from "antd";

import "./banner.css";
export default class Wash extends Component {
  render() {
    return (
      <>
        <p style={{ position: "absolute", margin: "15px" }}> Select Wash</p>
        <div
          style={{
            width: "100%",
            display: "flex",

            color: "gray",
            position: "absolute",
            height: "100%",
            alignItems: "center",
          }}
        >
          <div style={{ width: "16.8vw", textAlign: "center" }}>White</div>
          <div style={{ width: "16.8vw", textAlign: "center" }}>
            Light Indigo
          </div>
          <div style={{ width: "16.8vw", textAlign: "center" }}>Mid Indigo</div>
          <div style={{ width: "16.8vw", textAlign: "center" }}>
            Dark Indigo
          </div>
          <div style={{ width: "16.8vw", textAlign: "center" }}>
            Washed Black
          </div>
          <div style={{ width: "16.8vw", textAlign: "center" }}>
            Solid Black
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <Row type="flex" justify="center" align="middle">
              <img style={{ height: "100vh", width: "16.8vw" }} src={wash1} />
            </Row>
          </div>

          <div>
            <Row type="flex" justify="center" align="middle">
              <img style={{ height: "100vh", width: "16.5vw" }} src={wash2} />
            </Row>
          </div>

          <div>
            <Row type="flex" justify="center" align="middle">
              <img style={{ height: "100vh", width: "17vw" }} src={wash3} />
            </Row>
          </div>

          <div>
            <Row type="flex" justify="center" align="middle">
              <img style={{ height: "100vh", width: "16.5vw" }} src={wash4} />
            </Row>
          </div>

          <div>
            <Row type="flex" justify="center" align="middle">
              <img style={{ height: "100vh", width: "16.9vw" }} src={wash5} />
            </Row>
          </div>
          <div>
            <Row type="flex" justify="center" align="middle">
              <img style={{ height: "100vh", width: "16.5vw" }} src={wash6} />
            </Row>
          </div>
        </div>
      </>
    );
  }
}
