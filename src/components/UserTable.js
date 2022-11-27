import { Button, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { deleteUser, getAllUser } from "../Api/admin.axios";
import ModalAddUser from "./ModalAddUser";

const UserTable = () => {
  const [data, setData] = useState([]);
  const [modalAddUser, setModalAddUser] = useState(false);
  useEffect(() => {
    getAllUser()
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "firstName",
      key: "fistName",
      render: (_, { firstName }) => <span>{firstName}</span>,
    },
    {
      title: "lastName",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
      render: (_, { role }) => (
        <>
          {role === "USER" ? (
            <Tag color={"geekblue"}>{role}</Tag>
          ) : (
            <Tag color={"volcano"}>{role}</Tag>
          )}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            danger
            shape="circle"
            icon={<i className="bi bi-trash"></i>}
            className="flex-center"
            onClick={() => handleDeleteUser(record)}
          />

          <Button
            type="primary"
            shape="circle"
            icon={<i className="bi bi-pen"></i>}
            className="flex-center"
          />
        </Space>
      ),
    },
  ];

  const handleDeleteUser = (user) => {
    deleteUser(user._id).then((data) => {
      setData((pre) => pre.filter((x) => x._id !== data._id));
    });
  };
  return (
    <>
      <ModalAddUser
        setData={setData}
        open={modalAddUser}
        handleCancel={() => setModalAddUser(false)}
      />
      <Button
        className="mb-2"
        type="primary"
        onClick={() => setModalAddUser(true)}
      >
        Add User
      </Button>
      <Table columns={columns} dataSource={data} rowKey={"_id"} />
    </>
  );
};

export default UserTable;
