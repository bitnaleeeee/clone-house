import React from "react";
import "./Line.scss";
import { useEffect } from "react";
import { useState } from "react";
import fetchAPI from "../jsonAPI";

const Line = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${fetchAPI}/houseThumbnailList`)
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
            {data.length &&
              data[0].list.map((item, idx) => {
                return (
                  <li key={idx}>
                    <a href="#!">
                      <div className="thumbnail">
                        <span
                          className={item.date > 20230725 ? "clip new" : null}
                        >
                          {item.date > 20230725 ? "NEW" : null}
                        </span>
                        <img src={item.imgSrc} alt="" className="img" />{" "}
                        <div className="bookmark">
                          <input
                            type="checkbox"
                            className="bookmark"
                            id="check-01-01"
                            defaultChecked={item.bookMark}
                          />
                          <label htmlFor="check-01-01" />
                        </div>
                      </div>
                      <p className="info">
                        <span className="point">{item.subTitle}</span>
                        {item.info}{" "}
                      </p>
                    </a>
                  </li>
                );
              })}
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
            {data.length &&
              data[1].list.map((item, idx) => {
                return (
                  <li key={idx}>
                    <a href="#!">
                      <div className="thumbnail">
                        <span
                          className={item.date > 20230725 ? "clip new" : null}
                        >
                          {item.date > 20230725 ? "NEW" : null}
                        </span>
                        <img src={item.imgSrc} alt="" className="img" />
                        <div className="bookmark">
                          <input
                            type="checkbox"
                            className="bookmark"
                            id="check-02-01"
                            defaultChecked={item.bookMark}
                          />
                          <label htmlFor="check-02-01" />
                        </div>
                      </div>
                      <p className="info">
                        <span className="point"> {item.subTitle}</span>{" "}
                        {item.info}
                      </p>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Line;
