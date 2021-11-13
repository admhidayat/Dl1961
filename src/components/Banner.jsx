import React, { Component } from "react";
import bimage1 from "../images/bimage1.png";
import bimage2 from "../images/bimage2.png";
import bimage3 from "../images/bimage3.png";
import bimage4 from "../images/bimage4.png";
import { Row, Col } from "antd";

import "./banner.css";
export default class Banner extends Component {
  render() {
    return (
      <>
        <div style={{ display: "flex", height: "100%"}}>
          <div
            style={{
              backgroundImage: `url(${bimage1})`,
              //image required
              width: "25%",
            }}
          >
            <Row
              type="flex"
              justify="center"
              align="middle"
              style={{ minHeight: "100vh" }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "24px",
                  textAlign: "center",
                  margin: "10px",
                  letterSpacing: "1px",
                  wordSpacing: "5px",
                }}
              >
                A typical pair of jeans takes 1500 gallons of water to make. Our
                take less then 10, thanks to ultra-absorbent fibers and
                waterless technologies.
              </p>
            </Row>
          </div>
          <div
            style={{
              backgroundImage: `url(${bimage2})`,
              width: "27%",
            }}
          >
            <Row
              type="flex"
              justify="center"
              align="middle"
              style={{ minHeight: "96vh" }}
            >
              <p
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "24px",
                  margin: "10px",
                  letterSpacing: "1px",
                  wordSpacing: "5px",
                }}
              >
                We've partnered with Recover
                <sup>TM </sup>to recycle excess textile waste from around the
                world into newm high-tech fibers.
              </p>
            </Row>
          </div>
          <div
            style={{
              backgroundImage: `url(${bimage3})`,
              width: "25%",
            }}
          >
            <Row
              type="flex"
              justify="center"
              align="middle"
              style={{ minHeight: "91vh" }}
            >
              <p
                style={{
                  color: "white",
                  textAlign: "center",

                  fontSize: "24px",
                  margin: "10px",
                  letterSpacing: "1px",
                  wordSpacing: "5px",
                }}
              >
                Our self-generating power plant uses solar panels and heat
                recovery power itself.
              </p>
            </Row>
          </div>
          <div
            style={{
              backgroundImage: `url(${bimage4})`,

              minHeight: "700px",
              width: "25%",
            }}
          >
            <Row
              type="flex"
              justify="center"
              align="middle"
              style={{ minHeight: "91vh" }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "24px",
                  margin: "10px",
                  textAlign: "center",

                  letterSpacing: "1px",
                  wordSpacing: "5px",
                }}
              >
                98% of the weter we use gets treated and recycled in our
                in-house plant.
              </p>
            </Row>
          </div>
        </div>
      </>
    );
  }
}
