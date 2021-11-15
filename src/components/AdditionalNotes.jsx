import React, { Component } from "react";
import { Input, Row } from "antd";
import "./styles.css"

const { TextArea } = Input;
export default class AdditionalNotes extends Component {
  onChange = (e) => {
    console.log(e);
  };
  render() {
    return (
      <div
        style={{
          background: "rgb(34,56,65)",
          background:
            "linear-gradient(0deg, rgba(34,56,65,1) 0%, rgba(137,145,165,1) 68%)",
        }}
      >
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ minHeight: "100vh", width: "100vw" }}
        >
          <TextArea
            
            style={{ width: "50%", height: "100%", borderRadius:"20px", backgroundColor:"inherit" }}
            placeholder="Additional Notes"
            bordered
            rows="10"
            allowClear
            onChange={this.onChange}
          />
        </Row>
      </div>
    );
  }
}
