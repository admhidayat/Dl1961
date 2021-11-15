import React, { Component } from "react";
import { Table, Tag, Space, Row, Button } from "antd";
import "./styles.css"
const { Column, ColumnGroup } = Table;
const data = [
  {
    Key: "Data",
    Fit: "Fit",
  },
  {
    Key: "Data",
    Fit: "Inseam",
  },
  {
    Key: "Data",
    Fit: "Wash",
  },
  {
    Key: "Data",
    Fit: "Fabric",
  },
  {
    Key: "Data",
    Fit: "Hardware",
  },
  {
    Key: "Dasta",
    Fit: "Stitching",
  },
];
export default class SubmitForm extends Component {
  render() {
    return (
      <div
        style={{
          background: "rgb(198,199,199)",
          background:
            "linear-gradient(0deg, rgba(198,199,199,1) 0%, rgba(88,94,101,1) 100%)",
        }}
      >
        <Row
          type="flex"
          justify="center"
          flexDirection="column"
          align="middle"
          style={{ minHeight: "100vh" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Table
              dataSource={data}
              bordered
              pagination={false}
              showHeader={false}
            >
              <Row dataIndex="Fit" key="Fit" />
              <Row dataIndex="Fit" key="Fit" />
              {/* <Row dataIndex="address" key="address" /> */}
            </Table>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                height: "10vh",
              }}
            ></div>
            <Button
              style={{
                marginTop: "50px",
                borderRadius: "30px",
                height: "70px",
                backgroundColor: "black",
                color: "white",
                width: "320px",
              }}
            >
              Submit
            </Button>
          </div>
        </Row>
      </div>
    );
  }
}
