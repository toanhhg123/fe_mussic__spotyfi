import { Button, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMussicReduce, getAllMussicReduce } from "../src/features/mussic";
import ModalAddMussic from "./ModalAddMussic";

const TableMusic = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const { data } = useSelector((state) => state.mussic);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, { name }) => <span>{name}</span>,
    },
    {
      title: "Descriptions",
      dataIndex: "desc",
      key: "lastName",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Active",
      key: "isActive",
      dataIndex: "isActive",
      render: (_, { isAcctive }) => (
        <>
          {isAcctive ? (
            <Tag color={"geekblue"}>{"ACTIVE"}</Tag>
          ) : (
            <Tag color={"volcano"}>{"UNACTIVE"}</Tag>
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
            onClick={() => handleDeleteMussic(record._id)}
          />
        </Space>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getAllMussicReduce({ pageIndex: pageIndex }));
  }, [dispatch, pageIndex]);
  const handleDeleteMussic = (_id) => {
    dispatch(deleteMussicReduce(_id));
  };
  return (
    <>
      <Button
        className="mb-2"
        type="primary"
        onClick={() => setShowModal(true)}
      >
        Add Mussic
      </Button>
      <ModalAddMussic
        open={showModal}
        handleCancel={() => setShowModal(false)}
        setData={() => dispatch(getAllMussicReduce({ pageIndex: pageIndex }))}
      />
      <Table
        columns={columns}
        dataSource={data.files}
        rowKey={"_id"}
        pagination={{
          total: data.totalItem,
          onChange: (e) => {
            setPageIndex(e);
          },
        }}
      />
    </>
  );
};

export default TableMusic;
