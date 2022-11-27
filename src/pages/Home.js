import React from "react";
import FeedHeader from "../components/FeedHeader";
import Layout from "../components/Layout";
import ListMussic from "../components/ListMussic";

const Home = () => {
  return (
    <Layout>
      <FeedHeader />
      <ListMussic />
    </Layout>
  );
};

export default Home;
