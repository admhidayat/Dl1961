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
        <div
          
          style={{width:"100%", height:"100%", display:"flex", justifyContent:"space-evenly", alignItems:"center"}}
        >
         
            <div style={{display:"flex",  width:"90%"}}>
              <div style={{width:"100%", margin:"10px"}}>
                <Col xs={24} sm={24} md={24} lg={24}>
                  <Form.Item
                    name="fname"
                    
              
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
                      style={{ height: "80px", borderRadius: "20px" }}
                      size="large"
                      placeholder="First Name"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24}>
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
                      style={{ height: "80px", borderRadius: "20px" }}
                      size="large"
                      placeholder="Last Name"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24}>
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
                      style={{ height: "80px", borderRadius: "20px" }}
                      size="large"
                      placeholder="E-mail Address"
                    />
                  </Form.Item>
                </Col>
              </div>
              <div style={{width:"100%"}}>
                <Col xs={24} sm={24} md={24} lg={24}>
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
                    <TextArea
                      style={{ height: "120px", borderRadius: "20px", marginTop:"11px" }}
                      placeholder="Favorite Brands"
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={24} lg={24}>
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
                    <TextArea
                      style={{ height: "140px", borderRadius: "20px" }}
                      placeholder="Notes"
                    />
                  </Form.Item>
                </Col>
              </div>
            </div>
        </div>
      </>
    );
  }
}
