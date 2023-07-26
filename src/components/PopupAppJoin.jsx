import React from "react";
import "./PopupAppJoin.scss";

const PopupAppJoin = () => {
  return (
    <div
      className="popupAppJoin"
      id="popupAppJoin"
      style={{ display: "block" }}
    >
      <div className="popup">
        <div className="inner">
          <div className="info">
            <svg
              className="logo"
              width="100%"
              height="100%"
              viewBox="0 0 20 20"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#35C5F0"
                  d="M16.41 0H3.59A3.59 3.59 0 0 0 0 3.59v12.82A3.59 3.59 0 0 0 3.59 20h12.82A3.59 3.59 0 0 0 20 16.41V3.59A3.59 3.59 0 0 0 16.41 0"
                ></path>
                <path
                  fill="#FFF"
                  d="M14.75 10.34c-.74 0-1.33-.6-1.33-1.34 0-.74.6-1.34 1.33-1.34s1.32.6 1.32 1.34c0 .74-.59 1.34-1.32 1.34zm-1 3.53H6.12V8.75l3.82-2.7 2.2 1.55a3.01 3.01 0 0 0-.35 1.4 3 3 0 0 0 1.98 2.83v2.04zm1-7.87c-.34 0-.66.06-.97.17l-3.17-2.24a1.18 1.18 0 0 0-1.35 0L4.5 7.28a1.2 1.2 0 0 0-.51.98v6.54c0 .66.53 1.2 1.19 1.2h9.5a1.2 1.2 0 0 0 1.18-1.2v-3.02A3 3 0 0 0 17.7 9c0-1.65-1.32-3-2.96-3z"
                ></path>
              </g>
            </svg>

            <div className="text">
              <p className="type01">
                앱에서는 1초만에!
                <br />
                간편하게 로그인하기
              </p>
              <p className="type02">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <strong>특가, 쿠폰 등 앱 전용 혜택까지</strong>
              </p>
            </div>
          </div>
          <div className="btn-wrap">
            <button type="button" className="btn-app">
              편리한 앱으로 보기
            </button>
            <button type="button" className="btn-web">
              모바일 웹으로 볼래요
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopupAppJoin;