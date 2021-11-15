import React, { Component } from "react";
import water from "../images/water.mp4";
import solar from "../images/solar.mp4";
import recycled from "../images/recycled.mp4";
import laser from "../images/laser.mp4";

import { Row, Col } from "antd";

import "./banner.css";
export default class Banner extends Component {
  render() {
    return (
      <>
        <div style={{ display: "flex" }}>
          <Row style={{ width: "25vw",height:"100%"  }}>
            <video autoPlay loop width="100%" src={water} />
          </Row>
          <Row style={{ width: "25vw",height:"100%"  }}>
            <video width="100%" src={recycled} />
          </Row>
          <Row style={{ width: "25vw",height:"100%"  }}>
            <video width="100%"  src={solar} />
          </Row>
          <Row style={{ width: "25vw",height:"100%"  }}>
            <video width="100%" src={laser} />
          </Row>
        </div>
      </>
    );
  }
}
