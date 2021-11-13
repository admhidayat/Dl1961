import React, { Component } from "react";
import bimage1 from "../images/bimage1.png";
import bimage2 from "../images/bimage2.png";
import bimage3 from "../images/bimage3.png";
import bimage4 from "../images/bimage4.png";
import { Row, Col } from "antd";

import "./banner.css";
export default class Wash extends Component {
  render() {
    return (
      <>
        <p style={{ position: "absolute", margin: "15px" }}>Wash</p>

        <div style={{ display: "flex", height: "100%" }}>
          <div
            style={{
              backgroundColor: "white",
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
                  color: "Black",
                  fontSize: "24px",
                  textAlign: "center",
                  margin: "10px",
                  letterSpacing: "1px",
                  wordSpacing: "5px",
                }}
              >
                White
              </p>
            </Row>
          </div>
          <div
            style={{
              backgroundColor: "#928fce",
              width: "27%",
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
                  textAlign: "center",
                  color: "White",
                  fontSize: "24px",
                  margin: "10px",
                  letterSpacing: "1px",
                  wordSpacing: "5px",
                }}
              >
                Light Indigo
              </p>
            </Row>
          </div>
          <div
            style={{
              backgroundColor: "#4B0082",
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
                  textAlign: "center",

                  fontSize: "24px",
                  margin: "10px",
                  letterSpacing: "1px",
                  wordSpacing: "5px",
                }}
              >
                Mid Indigo
              </p>
            </Row>
          </div>
          <div
            style={{
              backgroundColor: "#2A0D5D",
              minHeight: "700px",
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
                  margin: "10px",
                  textAlign: "center",

                  letterSpacing: "1px",
                  wordSpacing: "5px",
                }}
              >
                Dark Indigo
              </p>
            </Row>
          </div>
          <div
            style={{
              backgroundColor: "#1f262a",

              minHeight: "700px",
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
                  margin: "10px",
                  textAlign: "center",

                  letterSpacing: "1px",
                  wordSpacing: "5px",
                }}
              >
                Washed Indigo
              </p>
            </Row>
          </div>
          <div
            style={{
              backgroundColor: "#000000",

              minHeight: "700px",
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
                  margin: "10px",
                  textAlign: "center",

                  letterSpacing: "1px",
                  wordSpacing: "5px",
                }}
              >
                Solid black
              </p>
            </Row>
          </div>
        </div>
      </>
    );
  }
}
