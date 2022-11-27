import { Alert, DatePicker, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { createUser } from "../Api/admin.axios";
import { useNavigate } from "react-router-dom";

const ModalAddUser = ({ open, handleCancel, setData }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    dateOfBirth: "",
    schoolId: "63647ff55ad86d72f4a7a2b8",
    role: "USER",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const onFinish = (values) => {
    setUser(() => ({ ...user, values }));
    handleSubmit();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = () => {
    createUser(user)
      .then((data) => {
        setSuccess(true);
        setData((pre) => [...pre, data]);
        setTimeout(() => {
          navigate("/admin");
        }, 3000);
      })
      .catch((e) => setError(e.message));
  };

  const handleOk = () => {
    handleSubmit();
  };
  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      onOk={handleOk}
      title="Form Add New User"
    >
      {success && <Alert message="Success add user" type="success" showIcon />}
      {error && <Alert message={error} type="error" showIcon />}

      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        className="p-4"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your first name!",
            },
          ]}
        >
          <Input
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your last name!",
            },
          ]}
        >
          <Input
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </Form.Item>
        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your last email!",
            },
          ]}
        >
          <Input
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Item>
        <Form.Item
          label="Birth Day"
          name="dateOfBirth"
          rules={[
            {
              required: true,
              message: "Please choice your  date or birth!",
            },
          ]}
        >
          <DatePicker
            onChange={(e) => setUser({ ...user, dateOfBirth: e?.format() })}
          />
        </Form.Item>

        <Form.Item
          label="password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Item>
        <Form.Item name="role" label="role" rules={[{ required: true }]}>
          <Select
            style={{
              width: 120,
            }}
            placeholder="Select role user"
            onChange={(e) => setUser({ ...user, role: e })}
            allowClear
            defaultValue="USER"
            options={[
              {
                value: "USER",
                label: "USER",
              },
              {
                value: "ADMIN",
                label: "ADMIN",
              },
            ]}
          >
            <Select.Option value="USER">USER</Select.Option>
            <Select.Option value="ADMIN">ADMIN</Select.Option>
          </Select>
        </Form.Item>
        <Button hidden type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalAddUser;
