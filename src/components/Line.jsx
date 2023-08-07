import React from "react";
import "./Line.scss";
import { useEffect } from "react";
import { useState } from "react";
const Line = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://json-server-suvg.vercel.app/houseThumbnailList`)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <>
      <hr className="line" />
      <div className="inner">
        <div className="thumbnail-list">
          <h2 className="title">
            <p className="text">{data[0] && data[0].title}</p>
            <a href="!#" className="link blind">
              바로가기
            </a>
          </h2>
          <ul className="list">
            <li>
              <a href="#!">
                <div className="thumbnail">
                  <span className="clip new">NEW</span>
                  <img
                    src={data[0] && data[0].list[0].imgSrc}
                    alt=""
                    className="img"
                  />{" "}
                  <div className="bookmark">
                    <input
                      type="checkbox"
                      className="bookmark"
                      id="check-01-01"
                      // onChange={checkedBox}
                      // checked={isChecked}
                    />
                    <label htmlFor="check-01-01" />
                  </div>
                </div>
                <p className="info">
                  <span className="point">
                    {data[0] && data[0].list[0].subTitle}
                  </span>
                  {data[0] && data[0].list[0].info}{" "}
                </p>
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="thumbnail">
                  <span className="clip new">NEW</span>
                  <img
                    src={data[0] && data[0].list[1].imgSrc}
                    alt=""
                    className="img"
                  />
                  <div className="bookmark">
                    <input
                      type="checkbox"
                      className="bookmark"
                      id="check-01-02"
                      // onChange={checkedBox}
                    />
                    <label htmlFor="check-01-02" />
                  </div>
                </div>
                <p className="info">
                  <span className="point">
                    {" "}
                    {data[0] && data[0].list[1].subTitle}
                  </span>
                  {data[0] && data[0].list[1].info}{" "}
                </p>
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="thumbnail">
                  <img
                    src={data[0] && data[0].list[2].imgSrc}
                    alt=""
                    className="img"
                  />
                  <div className="bookmark">
                    <input
                      type="checkbox"
                      className="bookmark"
                      id="check-01-03"
                      // onChange={checkedBox}
                    />
                    <label htmlFor="check-01-03" />
                  </div>
                </div>
                <p className="info">
                  <span className="point">
                    {" "}
                    {data[0] && data[0].list[2].subTitle}
                  </span>
                  {data[0] && data[0].list[2].info}
                </p>
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="thumbnail">
                  <img
                    src={data[0] && data[0].list[3].imgSrc}
                    alt=""
                    className="img"
                  />
                  <div className="bookmark">
                    <input
                      type="checkbox"
                      className="bookmark"
                      id="check-01-04"
                      // onChange={checkedBox}
                    />
                    <label htmlFor="check-01-04" />
                  </div>
                </div>
                <p className="info">
                  <span className="point">
                    {" "}
                    {data[0] && data[0].list[3].subTitle}
                  </span>
                  {data[0] && data[0].list[3].info}
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="line" />
      <div className="inner">
        <div className="thumbnail-list">
          <h2 className="title">
            <p className="text">{data[1] && data[1].title}</p>
            <a href="!#" className="link blind">
              바로가기
            </a>
          </h2>
          <ul className="list">
            <li>
              <a href="#!">
                <div className="thumbnail">
                  <img
                    src={data[1] && data[1].list[0].imgSrc}
                    alt=""
                    className="img"
                  />
                  <div className="bookmark">
                    <input
                      type="checkbox"
                      className="bookmark"
                      id="check-02-01"
                      // onChange={checkedBox}
                    />
                    <label htmlFor="check-02-01" />
                  </div>
                </div>
                <p className="info">
                  <span className="point">
                    {" "}
                    {data[1] && data[1].list[0].subTitle}
                  </span>{" "}
                  {data[1] && data[1].list[0].info}
                </p>
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="thumbnail">
                  <span className="clip new">NEW</span>
                  <img
                    src={data[1] && data[1].list[1].imgSrc}
                    alt=""
                    className="img"
                  />
                  <div className="bookmark">
                    <input
                      type="checkbox"
                      className="bookmark"
                      id="check-02-02"
                      // onChange={checkedBox}
                    />
                    <label htmlFor="check-02-02" />
                  </div>
                </div>
                <p className="info">
                  <span className="point">
                    {" "}
                    {data[1] && data[1].list[1].subTitle}
                  </span>
                  {data[1] && data[1].list[1].info}
                </p>
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="thumbnail">
                  <span className="clip new">NEW</span>
                  <img
                    src={data[1] && data[1].list[2].imgSrc}
                    alt=""
                    className="img"
                  />
                  <div className="bookmark">
                    <input
                      type="checkbox"
                      className="bookmark"
                      id="check-02-03"
                      // onChange={checkedBox}
                    />
                    <label htmlFor="check-02-03" />
                  </div>
                </div>
                <p className="info">
                  <span className="point">
                    {" "}
                    {data[1] && data[1].list[2].subTitle}
                  </span>{" "}
                  {data[1] && data[1].list[2].info}
                </p>
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="thumbnail">
                  <img
                    src={data[1] && data[1].list[3].imgSrc}
                    alt=""
                    className="img"
                  />
                  <div className="bookmark">
                    <input
                      type="checkbox"
                      className="bookmark"
                      id="check-02-04"
                      // onChange={checkedBox}
                    />
                    <label htmlFor="check-02-04" />
                  </div>
                </div>
                <p className="info">
                  <span className="point">
                    {" "}
                    {data[1] && data[1].list[3].subTitle}
                  </span>{" "}
                  {data[1] && data[1].list[3].info}
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Line;
