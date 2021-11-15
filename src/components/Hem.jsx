import React, { Component } from "react";
import { Button, Row } from "antd";
import mara_straight from "../images/mara_straight.jpg";
import patti_straight from "../images/patti_straight.jpg";
import rachel_flare from "../images/rachel_flare.jpg";
import bridget_boot from "../images/bridget_boot.jpg";
import hepburn_wideleg from "../images/hepburn_wideleg.jpg";
import hem_background from "../images/hem_background.png";

export default class HemSelection extends Component {
  render() {
    return (
      <>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          {/* <div style={{
              height: "100%",
              backgroundImage: `url(${hem_background})`,
            }}></div> */}
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
                    borderRadius:"10px",
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
                    borderRadius:"10px",
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
                        borderRadius:"10px",
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
                      borderRadius:"10px",
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
        {/* <p style={{ position: "absolute", margin: "15px" }}>Fit</p> */}

        {/* <div   style={{
              height: "100vh",
              backgroundImage: `url(${hem_background})`,
            }}>
          <Row
            type="flex"
            justify="center"
            align="middle"
          
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
                <Button
                  style={{
                    borderRadius: "12px",
                    backgroundColor: "black",
                    color: "white",
                    width: "160px",
                    height: "50px",
                  }}
                >
                  Clean
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "2px",
                }}
              >
                <Button
                  style={{
                    borderRadius: "12px",
                    backgroundColor: "black",
                    color: "white",
                    width: "160px",
                    height: "50px",
                  }}
                >
                  Mara Straight
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Button
                  style={{
                    borderRadius: "12px",
                    backgroundColor: "black",
                    color: "white",
                    width: "160px",
                    height: "50px",
                  }}
                >
                  Mara Straight
                </Button>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "2px",
                }}
              >
                <Button
                  style={{
                    borderRadius: "12px",
                    backgroundColor: "black",
                    color: "white",
                    width: "160px",
                    height: "50px",
                  }}
                >
                  Mara Straight
                </Button>
              </div>
            </div>
          </Row>
        </div> */}
      </>
    );
  }
}
