import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PopupAppJoin from "../../components/PopupAppJoin";
import ReviewList from "../../components/ReviewList";
import Line from "../../components/Line";
import SimpleSlider from "../../components/SimpleSlider";

import "./Main.scss";

const Main = () => {
  return (
    <>
      <PopupAppJoin />
      <Header />
      <div className="main" id="main">
        <div className="inner">
          {/* 슬라이드 구현해주세요 */}
          <div className="slide-wrap">
            <ul className="slide-inner">
              <li>
                <a href="#!">
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/168989938361023939.png?w=480"
                    alt=""
                  />
                </a>
              </li>
            </ul>
            <span className="state">
              <span className="current">1</span>
              <span>/</span>
              <span className="total">12</span>
              <span>+</span>
            </span>
          </div>

          <div className="visual-menu">
            <ul className="list">
              <li>
                <a href="#!">
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167262690767101882.png?w=256"
                    alt=""
                  />
                  <span>쇼핑하기</span>
                </a>
              </li>
              <li>
                <a href="#!">
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/168811505553448516.png?w=256"
                    alt=""
                  />
                  <span>오!세일</span>
                </a>
              </li>
              <li>
                <a href="#!">
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198007152582471.png?w=256"
                    alt=""
                  />
                  <span>오늘의딜</span>
                </a>
              </li>
              <li>
                <a href="#!">
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/168661846720664430.png?w=256"
                    alt=""
                  />
                  <span>오늘의발견</span>
                </a>
              </li>
              <li>
                <a href="#!">
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198009533480922.png?w=256"
                    alt=""
                  />
                  <span>장보기</span>
                </a>
              </li>
              <li>
                <a href="#!">
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198010271968429.png?w=256"
                    alt=""
                  />
                  <span>집들이</span>
                </a>
              </li>
              <li>
                <a href="#!">
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167505411234148010.png?w=256"
                    alt=""
                  />
                  <span>취향의발견</span>
                </a>
              </li>
              <li>
                <a href="#!">
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198012024333402.png?w=256"
                    alt=""
                  />
                  <span>빠른배송</span>
                </a>
              </li>
              <li>
                <a href="#!">
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198021046015480.png?w=256"
                    alt=""
                  />
                  <span>쉬운이사</span>
                </a>
              </li>
              <li>
                <a href="#!">
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198022841390557.png?w=256"
                    alt=""
                  />
                  <span>리모델링</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Line />
        <hr className="line" />
        <div className="inner">
          <div className="shop-list">
            <h2 className="title">
              <p className="text">오늘의 딜</p>
              <a href="!#" className="link blind">
                바로가기
              </a>
            </h2>
            <ul className="list">
              <li>
                <a href="#!">
                  <div className="thumbnail">
                    <span className="clip count">
                      <span>09:04:02</span> 남음
                    </span>
                    <img
                      src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168912842371629941.jpg?gif=1&w=360&h=360&c=c&q=0.8"
                      alt=""
                      className="img"
                    />
                    <div className="bookmark">
                      <input
                        type="checkbox"
                        className="bookmark"
                        id="check-04-01"
                      />
                      <label htmlFor="check-04-01" />
                    </div>
                  </div>
                  <div className="info">
                    <div className="inner">
                      <span className="brand">인터쿡</span>
                      <p className="title">
                        100% 국내생산 1+1 후라이팬 프라이팬 사각팬
                      </p>
                      <div className="appraisal">
                        <span className="star">★</span>
                        <span className="score">4.6</span>
                        <span className="review">
                          리뷰<strong>154</strong>
                        </span>
                      </div>
                      <div className="price">
                        <span className="rate">
                          <strong>46</strong>%
                        </span>
                        <span className="value">16,900</span>
                      </div>
                      <div className="delivery-today">
                        <img
                          src="https://assets.ohou.se/web/dist/media/assets/icons/ic-departure-today-c4b771c1162afcd9223631b660e19d73.png"
                          alt="오늘출발"
                        />
                        <strong>평일 15:00까지 결제시</strong>
                      </div>
                      <div className="feature">
                        <span className="free">무료배송</span>
                        <span className="special">특가</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#!">
                  <div className="thumbnail">
                    <span className="clip count">
                      <span>09:04:02</span> 남음
                    </span>
                    <img
                      src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168507660461807373.jpg?gif=1&w=360&h=360&c=c&q=0.8"
                      alt=""
                      className="img"
                    />
                    <div className="bookmark">
                      <input
                        type="checkbox"
                        className="bookmark"
                        id="check-04-02"
                      />
                      <label htmlFor="check-04-02" />
                    </div>
                  </div>
                  <div className="info">
                    <div className="inner">
                      <span className="brand">LG전자</span>
                      <p className="title">
                        [오늘의딜]LG 휘센 듀얼인버터 제습기 13L 화이트 DQ132PWXC
                      </p>
                      <div className="appraisal">
                        <span className="star">★</span>
                        <span className="score">4.8</span>
                        <span className="review">
                          리뷰<strong>172</strong>
                        </span>
                      </div>
                      <div className="price">
                        <span className="rate">
                          <strong>43</strong>%
                        </span>
                        <span className="value">430,000</span>
                      </div>
                      <div className="delivery-today">
                        <img
                          src="https://assets.ohou.se/web/dist/media/assets/icons/ic-departure-today-c4b771c1162afcd9223631b660e19d73.png"
                          alt="오늘출발"
                        />
                        <strong>평일 15:00까지 결제시</strong>
                      </div>
                      <div className="feature">
                        <span className="free">무료배송</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#!">
                  <div className="thumbnail">
                    <span className="clip count">
                      <span>09:04:02</span> 남음
                    </span>
                    <img
                      src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167290049066133640.jpg?gif=1&w=360&h=360&c=c&q=0.8"
                      alt=""
                      className="img"
                    />
                    <div className="bookmark">
                      <input
                        type="checkbox"
                        className="bookmark"
                        id="check-04-03"
                      />
                      <label htmlFor="check-04-03" />
                    </div>
                  </div>
                  <div className="info">
                    <div className="inner">
                      <span className="brand">아이닉</span>
                      <p className="title">
                        [선착순 한정 쿠폰]무선청소기 엘리트 / UV 살균브러시 탑재
                      </p>
                      <div className="appraisal">
                        <span className="star">★</span>
                        <span className="score">4.5</span>
                        <span className="review">
                          리뷰<strong>19,007</strong>
                        </span>
                      </div>
                      <div className="price">
                        <span className="rate">
                          <strong>43</strong>%
                        </span>
                        <span className="value">158,000</span>
                      </div>
                      <div className="feature">
                        <span className="special">특가</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#!">
                  <div className="thumbnail">
                    <span className="clip count">
                      <span>09:04:02</span> 남음
                    </span>
                    <img
                      src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168023165630068991.jpg?gif=1&w=360&h=360&c=c&q=0.8"
                      alt=""
                      className="img"
                    />
                    <div className="bookmark">
                      <input
                        type="checkbox"
                        className="bookmark"
                        id="check-04-04"
                      />
                      <label htmlFor="check-04-04" />
                    </div>
                  </div>
                  <div className="info">
                    <div className="inner">
                      <span className="brand">샤오미</span>
                      <p className="title">
                        [단하루 선착순81,900원] 샤오미 미홀 쓰레기통 자동센서
                        스마트 휴지통 T7SPRO
                      </p>
                      <div className="appraisal">
                        <span className="star">★</span>
                        <span className="score">4.7</span>
                        <span className="review">
                          리뷰<strong>159</strong>
                        </span>
                      </div>
                      <div className="price">
                        <span className="rate">
                          <strong>46</strong>%
                        </span>
                        <span className="value">84,900</span>
                      </div>
                      <div className="delivery-today">
                        <img
                          src="https://assets.ohou.se/web/dist/media/assets/icons/ic-departure-today-c4b771c1162afcd9223631b660e19d73.png"
                          alt="오늘출발"
                        />
                        <strong>평일 15:00까지 결제시</strong>
                      </div>
                      <div className="feature">
                        <span className="free">무료배송</span>
                        <span className="special">특가</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="line" />
        <ReviewList />
      </div>
      <Footer />
      <SimpleSlider />
    </>
  );
};
export default Main;
