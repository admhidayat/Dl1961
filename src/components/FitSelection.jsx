import React, { Component } from "react";
import { Button , Row} from "antd";
import fit1 from "../images/fit1.png";

export default class FitSelection extends Component {
  render() {
    return (
        <>
                <p style={{position:"absolute", margin:"15px"}}>Fit</p>

        <Row type="flex" justify="center" align="middle" style={{minHeight: '100vh' }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems:"center"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" , margin:"2px" }}>
            <Button style={{borderRadius:"12px"}}>Mara Straight</Button>

            <div>
              <img style={{ width: "150px" }} src={fit1} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" , margin:"2px" }}>
            <Button style={{borderRadius:"12px"}}>Patti Straight</Button>

            <div>
              <img style={{ width: "150px" }} src={fit1} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column"  , margin:"2px"}}>
            <Button style={{borderRadius:"12px"}}>Bridget Boot</Button>

            <div>
              <img style={{ width: "150px" }} src={fit1} />
            </div>
          </div>
         
          <div style={{ display: "flex", flexDirection: "column" , margin:"2px" }}>
            <Button style={{borderRadius:"12px"}}>Helburn Wide Leg</Button>

            <div>
              <img style={{ width: "150px" }} src={fit1} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column"  , margin:"2px"}}>
            <Button style={{borderRadius:"12px"}}>Rachel Flare</Button>

            <div>
              <img style={{ width: "150px" }} src={fit1} />
            </div>
          </div>
        </div>
      </Row>
      </>
    );
  }
}
