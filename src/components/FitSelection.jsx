import React, { Component } from "react";
import { Button, Row } from "antd";
import mara_straight from "../images/mara_straight.jpg";
import patti_straight from "../images/patti_straight.jpg";
import rachel_flare from "../images/rachel_flare.jpg";
import bridget_boot from "../images/bridget_boot.jpg";
import hepburn_wideleg from "../images/hepburn_wideleg.jpg";

export default class FitSelection extends Component {
  render() {
    return (
      <>
        <p style={{ position: "absolute", margin: "15px" }}>Fit</p>

        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ height: "100vh" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "2px",
              }}
            >
              <Button style={{ borderRadius: "12px" }}>Mara Straight</Button>

              <div>
                <img
                  style={{ width: "150px", height: "380px" }}
                  src={mara_straight}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "2px",
              }}
            >
              <Button style={{ borderRadius: "12px" }}>Patti Straight</Button>

              <div>
                <img
                  style={{ width: "150px", height: "380px" }}
                  src={patti_straight}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "2px",
              }}
            >
              <Button style={{ borderRadius: "12px" }}>Bridget Boot</Button>

              <div>
                <img
                  style={{ width: "150px", height: "380px" }}
                  src={bridget_boot}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "2px",
              }}
            >
              <Button style={{ borderRadius: "12px" }}>Helburn Wide Leg</Button>

              <div>
                <img
                  style={{ width: "150px", height: "380px" }}
                  src={hepburn_wideleg}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "2px",
              }}
            >
              <Button style={{ borderRadius: "12px" }}>Rachel Flare</Button>

              <div>
                <img
                  style={{ width: "150px", height: "380px" }}
                  src={rachel_flare}
                />
              </div>
            </div>
          </div>
        </Row>
      </>
    );
  }
}
