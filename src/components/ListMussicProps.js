import { message, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoMP3 } from "../assets/imgs";
import { getAllMussicReduce } from "../src/features/mussic";
import { choiceMusic } from "../src/features/mussicPlay";
import { addMussicPlaylist } from "../src/features/playList";

const ListMussicProps = ({ mussics, title }) => {
  const { playLists } = useSelector((state) => state.playList);
  const [messageApi, contextHolder] = message.useMessage();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMussicReduce({ pageIndex: 1 }));
  }, [dispatch]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [namePlayList, setNamePlayList] = useState("Root");
  const [mussic, setMussic] = useState();

  const success = (message) => {
    messageApi.open({
      type: "success",
      content: message,
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    const payload = { name: namePlayList, mussic };

    console.log(payload);
    dispatch(addMussicPlaylist(payload));
    success("add playlist success");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleAddList = (mussic) => {
    setMussic(mussic);
    showModal();
  };

  return (
    <section className="feedPlaylist">
      {contextHolder}
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Select
          defaultValue={"Root"}
          style={{ width: 120 }}
          options={playLists.map((x) => ({ value: x.name, label: x.name }))}
          onChange={(e) => setNamePlayList(e)}
        />
      </Modal>
      <h4 className="mb-3">
        <a href="#/">
          <b>{title}</b>
        </a>
      </h4>
      <a className="see-all" href="#/">
        SEE-ALL
      </a>

      <br />
      <br />
      <ul className="playlists">
        {[...mussics].map((x, i) => (
          <li key={x._id}>
            <img src={logoMP3} alt="" />
            <button
              type="button"
              className="btn me-3"
              onClick={() => dispatch(choiceMusic(x))}
            >
              <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
              </svg>
            </button>

            <button
              type="button"
              className="btn me-3 btn-add-list"
              onClick={() => handleAddList(x)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                />
              </svg>
            </button>
            <span>{x.name}</span>
            <p>
              <br />
              {x.desc}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ListMussicProps;
