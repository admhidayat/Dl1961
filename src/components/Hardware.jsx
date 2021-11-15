import React, { Component } from "react";
import { Button, Row } from "antd";
import btn_silver from "../images/btn_silver.png";
import btn_gold from "../images/btn_gold.png";
import btn_pinkgold from "../images/btn_pinkgold.png";


export default class Hardware extends Component {
  render() {
    return (
      <div
        style={{
          background: "rgb(255,255,255)",
          background:
            " linear-gradient(180deg, rgba(255,255,255,1) 7%, rgba(160,174,210,1) 80%)",
        }}
      >
        <p style={{ position: "absolute", margin: "15px" }}>Select Hardware</p>

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
                margin: "12px",
              }}
            >
              <div>
                <img
                  style={{ width: "190px", height: "170px", margin: "20px" }}
                  src={btn_silver}
                />
              </div>
              <Button style={{ borderRadius: "12px", height:"50px" , backgroundColor:"inherit" , color:"white" }}>Brushed Silver</Button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "12px",
              }}
            >
              <div>
                <img
                  style={{ width: "190px", height: "170px", margin: "20px" }}
                  src={btn_gold}
                />
              </div>
              <Button style={{ borderRadius: "12px", height:"50px",backgroundColor:"inherit" , color:"white" }}>Brushed Gold</Button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "12px",
              }}
            >
              <div>
                <img
                  style={{ width: "190px", height: "170px", margin: "20px" }}
                  src={btn_pinkgold}
                />
              </div>
              <Button style={{ borderRadius: "12px", height:"50px",backgroundColor:"inherit" , color:"white" }}>Mate Rose Gold</Button>
            </div>
          </div>
        </Row>
      </div>
    );
  }
}
