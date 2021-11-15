import React, { Component } from "react";
import { Button, Row } from "antd";
import hem_background from "../images/hem_background.png";

export default class HemSelection extends Component {
  render() {
    return (
      <>
      <p style={{ position: "absolute", margin: "15px", color: "white" }}>
         Select Hem
        </p>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
            <p style={{ position: "absolute", margin: "15px", color: "white" }}>
         Select Hem
        </p>
          <img style={{ height: "100%", width: "100%" }} src={hem_background} />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              transform: "translate(-50%, -50%)",
              color: "white",
              padding: " 12px 24px",
              border: "none",
              cursor: " pointer",
              borderRradius: " 5px",
              textAlign: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Button
                  style={{
                    borderRadius: "10px",
                    width: "150px",
                    margin: "10px",
                    height: "50px",
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  Clean
                </Button>
              </div>
              <div>
                <Button
                  style={{
                    borderRadius: "10px",
                    width: "150px",
                    margin: "10px",
                    height: "50px",
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  Clean and Grinding
                </Button>
              </div>
              <div>
                <Button
                  style={{
                    borderRadius: "10px",
                    width: "150px",
                    margin: "10px",
                    height: "50px",
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  Raw
                </Button>{" "}
              </div>
              <div>
                <Button
                  style={{
                    borderRadius: "10px",
                    width: "150px",
                    margin: "10px",
                    height: "50px",
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  Supper Shredded
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
