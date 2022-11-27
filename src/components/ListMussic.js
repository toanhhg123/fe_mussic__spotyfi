import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoMP3 } from "../assets/imgs";
import { getAllMussicReduce } from "../src/features/mussic";
import { choiceMusic } from "../src/features/mussicPlay";

const ListMussic = () => {
  const { data } = useSelector((state) => state.mussic);
  const { files } = data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMussicReduce({ pageIndex: 1 }));
  }, [dispatch]);
  return (
    <section className="feedPlaylist">
      <h4 className="mb-3">
        <a href="#/">
          <b>Your top mixes</b>
        </a>
      </h4>
      <a className="see-all" href="#/">
        SEE-ALL
      </a>
      <br />
      <br />
      <ul className="playlists">
        {[...files].map((x, i) => (
          <li key={x._id} onClick={() => dispatch(choiceMusic(x))}>
            <img src={logoMP3} alt="" />
            <button type="button" className="btn me-3">
              <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
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

export default ListMussic;
