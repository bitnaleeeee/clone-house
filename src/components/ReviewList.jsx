import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./ReviewList.scss";

const ReviewList = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://json-server-suvg.vercel.app/houseReviewList`)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  return (
    <div className="inner">
      <div className="review-list">
        <h2 className="title">
          <p className="text">유저들의 인테리어 시공 리뷰</p>
          <a href="!#" className="link blind">
            바로가기
          </a>
        </h2>
        <ul className="list">
          {data &&
            data.map((item, idx) => {
              return (
                <li key={idx}>
                  <div className="img">
                    <img src={item && item.imgSrc} alt="" />
                  </div>
                  <div className="info">
                    <strong className="title">{item && item.company}</strong>
                    <p className="text">{item && item.info}</p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default ReviewList;
