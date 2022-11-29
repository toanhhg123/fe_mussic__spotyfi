import { Alert, Button, Form, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import { addMussic } from "../Api/admin.axios";

const ModalAddMussic = ({ open, handleCancel, setData }) => {
  const [mussic, setMussic] = useState({
    name: "",
    desc: "",
    subjects: "6379b2761d8b75eec369ff35",
    file: null,
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const onFinish = (values) => {
    handleSubmit();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = () => {
    addMussic(mussic)
      .then((res) => {
        setSuccess("Add mussic success");
        setData();
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
      title="Form Add New Music"
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
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input
            onChange={(e) => setMussic({ ...mussic, name: e.target.value })}
          />
        </Form.Item>

        <Form.Item
          label="desc"
          name="desc"
          rules={[
            {
              required: true,
              message: "Please input your desc!",
            },
          ]}
        >
          <TextArea
            showCount
            maxLength={100}
            style={{ height: 120, marginBottom: 24 }}
            placeholder="can resize"
            onChange={(e) => setMussic({ ...mussic, desc: e.target.value })}
          />
        </Form.Item>

        <Form.Item>
          <FormControl
            type="file"
            size="lg"
            onChange={(e) => {
              if (e.target.files && e.target.files.length) {
                setMussic({ ...mussic, file: e.target.files[0] });
              }
            }}
          />
        </Form.Item>

        <Button hidden type="primary" htmltype="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
};

const props = {
  action: "//jsonplaceholder.typicode.com/posts/",
  listType: "audio/mpeg",
  previewFile(file) {
    console.log("Your upload file:", file);
    // Your process logic. Here we just mock to the same file
    return fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8", {
      method: "POST",
      body: file,
    })
      .then((res) => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};
export default ModalAddMussic;
