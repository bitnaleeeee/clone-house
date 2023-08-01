import React from "react";
import "./Header.scss";
import logo from "../common/images/logo.png";
import homeBtn from "../common/images/home-btn.png";
import searchBtn from "../common/images/search-btn.png";
import basketBtn from "../common/images/basket-btn.png";
import { useState } from "react";

const manuArray = [
  "홈",
  "추천",
  "집들이",
  "집사진",
  "살림수납",
  "홈스토랑",
  "취미일상",
  "3D인테리어",
  "이벤트",
];

const Header = () => {
  const [text, setText] = useState("홈");

  function onClickClass(e) {
    setText(e.target.innerText);
  }
  return (
    <header className="header" id="header">
      <div className="home">
        {/* 홈버튼 */}
        <button type="button" className="home-menu-btn">
          <img src={homeBtn} alt="" />
          <span className="blind">홈메뉴</span>
        </button>

        {/* 로고 */}
        <h1 className="logo">
          <a href="#!">
            <img src={logo} alt="" />
            <span className="blind">오늘의집</span>
          </a>
        </h1>

        {/* 유틸메뉴 */}
        <div className="utility-menu">
          <a href="#!" className="search-btn">
            <img src={searchBtn} alt="" />
            <span className="blind">검색</span>
          </a>
          <a href="#!" className="basket-btn">
            <img src={basketBtn} alt="" />
            <span className="blind">장바구니</span>
          </a>
        </div>
      </div>

      <nav className="gnb">
        {/* 동적으로 UL(list)의 넓이를 정해주세요 */}

        <ul className="list" style={{ width: "620px" }}>
          {manuArray.map((item, idx) => {
            return (
              <li key={idx} className={text === item ? "active" : null}>
                <a onClick={onClickClass} href="#!">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
