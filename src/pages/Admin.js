import { Tabs } from "antd";
import React from "react";
import Layout from "../components/Layout";
import TableMusic from "../components/TableMussic";
import UserTable from "../components/UserTable";

const Admin = () => {
  return (
    <Layout>
      <div className="bg-white p-3">
        <Tabs>
          <Tabs.TabPane tab="Users" key="item-1">
            <UserTable />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Mussic" key="item-2">
            <TableMusic />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Admin;
