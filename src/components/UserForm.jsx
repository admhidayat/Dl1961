import React, { Component } from "react";
import { Row, Col } from "antd";
import { Input } from "antd";

import "./form.css";
import { Form } from "antd";

const { TextArea } = Input;

const onChange = (e) => {
  console.log(e);
};
export default class UserForm extends Component {
  render() {
    return (
      <>
        <p style={{ position: "absolute", margin: "15px" }}>Profile</p>
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ minHeight: "100vh" }}
        >
          <Form>
            <Row justify="space-around">
              <Col xs={24} sm={24} md={10} lg={10}>
                <Form.Item
                  name="fname"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Please enter First Name.",
                    },
                    {
                      pattern: new RegExp(/^[a-zA-Z ]*$/),
                      message: "Numbers not allowed",
                    },
                  ]}
                >
                  <Input
                    className="input"
                    size="large"
                    placeholder="First Name"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={10} lg={10}>
                <Form.Item
                  name="fname"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Please enter First Name.",
                    },
                    {
                      pattern: new RegExp(/^[a-zA-Z ]*$/),
                      message: "Numbers not allowed",
                    },
                  ]}
                >
                  <Input className="input" placeholder="First Name" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={10} lg={10}>
                <Form.Item
                  name="fname"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Please enter First Name.",
                    },
                    {
                      pattern: new RegExp(/^[a-zA-Z ]*$/),
                      message: "Numbers not allowed",
                    },
                  ]}
                >
                  <Input
                    className="input"
                    size="large"
                    placeholder="Last Name"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={10} lg={10}>
                <Form.Item
                  name="fname"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Please enter Last name.",
                    },
                    {
                      pattern: new RegExp(/^[a-zA-Z ]*$/),
                      message: "Numbers not allowed",
                    },
                  ]}
                >
                  <Input
                    className="input"
                    size="large"
                    placeholder="First Name"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={10} lg={10}>
                <Form.Item
                  name="fname"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Please enter First Name.",
                    },
                    {
                      pattern: new RegExp(/^[a-zA-Z ]*$/),
                      message: "Numbers not allowed",
                    },
                  ]}
                >
                  <Input
                    className="input"
                    size="large"
                    placeholder="E-mail Address"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={10} lg={10}>
                <Form.Item
                  name="fname"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Please enter E-mail Address.",
                    },
                    {
                      pattern: new RegExp(/^[a-zA-Z ]*$/),
                      message: "Numbers not allowed",
                    },
                  ]}
                >
                  <TextArea className="input" placeholder="First Name" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
          {/* <div
          type="flex"
          justify="center"
          align="middle"
          style={{ minHeight: "100vh" , width:"100%"}}
        >
          <Row gutter={[32, 48]}>
            <Col span={11}>
              <Input
                size="large"
                placeholder="First Name"
                prefix={<UserOutlined />}
              />
            </Col>
            <Col span={11}>
              <TextArea
                placeholder="Favourite Brands"
                allowClear
                onChange={onChange}
              />
            </Col>
            <Col span={11}>
              <Input
                size="large"
                placeholder="Last Name"
                prefix={<UserOutlined />}
              />
            </Col>
            <Col span={11}>
              <TextArea placeholder="Notes" allowClear onChange={onChange} />
            </Col>
            <Col span={11}>
              <Input
                size="large"
                placeholder="E-mail Address"
                prefix={<UserOutlined />}
              />
            </Col>
          </Row>
        </div> */}
        </Row>
      </>
    );
  }
}
