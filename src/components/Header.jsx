import React from "react";
import "./Header.scss";
import logo from "../common/images/logo.png";
import homeBtn from "../common/images/home-btn.png";
import searchBtn from "../common/images/search-btn.png";
import basketBtn from "../common/images/basket-btn.png";

const Header = () => {
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
        <ul className="list">
          <li className="active">
            <a href="#!">홈</a>
          </li>
          <li>
            <a href="#!">추천</a>
          </li>
          <li>
            <a href="#!">집들이</a>
          </li>
          <li>
            <a href="#!">집사진</a>
          </li>
          <li>
            <a href="#!">살림수납</a>
          </li>
          <li>
            <a href="#!">홈스토랑</a>
          </li>
          <li>
            <a href="#!">취미일상</a>
          </li>
          <li>
            <a href="#!">3D인테리어</a>
          </li>
          <li>
            <a href="#!">이벤트</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
