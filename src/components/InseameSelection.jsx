import React, { Component } from "react";
import { Select } from "antd";
const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}
export default class InseameSelection extends Component {
  render() {
    return (
      <>
        <p style={{ position: "absolute", margin: "15px" }}>Select Inseam</p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "90%",
          }}
        >
          <Select
            onFocus={(e) => e.stopPropagation()}
            size="large"
            showSearch
            style={{ width: 400, textAlign: "center" }}
            placeholder="Select Inseam"
            optionFilterProp="children"
            onChange={onChange}
            // onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
          ,
        </div>
      </>
    );
  }
}
