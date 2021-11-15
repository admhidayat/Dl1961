import React, { Component } from "react";
import dl1961 from "../images/DL1961_logo.png"
import "./banner.css";
export default class Intro extends Component {
  render() {
    return (
      <>
        <div className="box">
          <img  style={{width:"180px", height:"100px"}} src={dl1961}/>
          {/* <h2>DIGITAG_PROGRAM</h2> */}
        </div>
      </>
    );
  }
}
