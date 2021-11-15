import React, { Component } from "react";
import dl1961 from "../images/DL1961_logo.png"
import "./banner.css";
export default class Intro extends Component {
  render() {
    return (
      <>
        <div className="box">
          <img  style={{width:"150px", height:"30px"}} src={dl1961}/>
        
        </div>
      </>
    );
  }
}
