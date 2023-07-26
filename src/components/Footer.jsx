import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="inner">
        <h3 className="title">고객센터&gt;</h3>
        <p className="telephone">
          <strong>1670-0876</strong>
          <span>09:00 ~ 18:00</span>
        </p>
        <p className="text">평일: 전체 문의 상담 가능<br />주말, 공휴일: 오늘의집 직접배송, 이사/시공/수리 문의 상담 가능</p>
        <div className="company-list">
          <ul>
            <li><a href="!#">회사소개</a></li>
            <li><a href="!#">채용정보</a></li>
            <li><a href="!#">이용약관</a></li>
            <li><a href="!#"><strong>개인정보 처리방침</strong></a></li>
            <li><a href="!#">공지사항</a></li>
            <li><a href="!#">안전거래센터</a></li>
            <li><a href="!#">입점신청</a></li>
            <li><a href="!#">제휴/광고 문의</a></li>
            <li><a href="!#">사업자 구매 회원</a></li>
            <li><a href="!#">시공파트너 안내</a></li>
            <li><a href="!#">상품광고 소개</a></li>
            <li><a href="!#">고객의 소리</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;