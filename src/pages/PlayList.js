import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import ListMussicProps from "../components/ListMussicProps";

const PlayList = () => {
  const params = useParams();
  const { name } = params;
  const { playLists } = useSelector((state) => state.playList);
  const listItem = playLists.find((x) => x.name === name);

  return listItem ? (
    <Layout>
      Playlist
      <ListMussicProps
        mussics={listItem.musics}
        title={"play list " + listItem.name}
      />
    </Layout>
  ) : (
    <Navigate to={"/404"} />
  );
};

export default PlayList;
