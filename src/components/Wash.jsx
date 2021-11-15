import React, { Component } from "react";
import wash1 from "../images/wash1.png";
import wash2 from "../images/wash2.png";
import wash3 from "../images/wash3.png";
import wash4 from "../images/wash4.png";
import wash5 from "../images/wash5.png";

import { Row, Col } from "antd";

import "./banner.css";
export default class Wash extends Component {
  render() {
    return (
      <>
        <p style={{ position: "absolute", margin: "15px" }}>Wash</p>

        <div style={{ display: "flex" }}>
          <div>
            <Row type="flex" justify="center" align="middle">
              <img style={{ height: "100vh", width: "20vw" }} src={wash1} />
            </Row>
          </div>

          <div>
            <Row type="flex" justify="center" align="middle">
              <img style={{ height: "100vh", width: "20vw" }} src={wash2} />
            </Row>
          </div>

          <div>
            <Row type="flex" justify="center" align="middle">
              <img style={{ height: "100vh", width: "20vw" }} src={wash3} />
            </Row>
          </div>

          <div>
            <Row type="flex" justify="center" align="middle">
              <img style={{ height: "100vh", width: "20vw" }} src={wash4} />
            </Row>
          </div>

          <div>
            <Row type="flex" justify="center" align="middle">
              <img style={{ height: "100vh", width: "20vw" }} src={wash5} />
            </Row>
          </div>

          {/* <div>
            <Row type="flex" justify="center" align="middle">
              <div>
                <img src={wash2} />
              </div>
            </Row>
          </div>
          <div>
            <Row type="flex" justify="center" align="middle">
              <div>
                <img src={wash3} />
              </div>
            </Row>
          </div>
          <div>
            <Row type="flex" justify="center" align="middle">
              <div>
                <img src={wash4} />
              </div>
            </Row>
          </div>
          <div>
            <Row type="flex" justify="center" align="middle">
              <div>
                <img src={wash5} />
              </div>
            </Row>
          </div> */}
        </div>
      </>
    );
  }
}
