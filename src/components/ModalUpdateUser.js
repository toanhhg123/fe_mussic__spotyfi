import { Alert, DatePicker, Form, Input, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { createUser, updateUser } from "../Api/admin.axios";
import { useNavigate } from "react-router-dom";

const ModalUpdateUser = ({ open, handleCancel, setData, data }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(data);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setUser(data);
  }, [data]);
  const onFinish = (values) => {
    setUser(() => ({ ...user, values }));
    handleSubmit();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = () => {
    console.log(user);
    updateUser(user._id, user)
      .then((data) => {
        setTimeout(() => {
          navigate("/admin");
          setSuccess(true);

          window.location.href = "/admin";
        }, 1000);
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
      {success && (
        <Alert message="Success update user" type="success" showIcon />
      )}
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
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="First Name" name="firstName">
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

        <Form.Item name="role" label="role" rules={[{ required: true }]}>
          <Select
            style={{
              width: 120,
            }}
            placeholder="Select role user"
            onChange={(e) => setUser({ ...user, role: e })}
            allowClear
            defaultValue={user.role}
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
        <Button hidden type="primary" htmltype="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalUpdateUser;
