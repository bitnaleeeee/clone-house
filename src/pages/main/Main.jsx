import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PopupAppJoin from "../../components/PopupAppJoin";
import ReviewList from "../../components/ReviewList";

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
              {/* <li>
                <a href="#!">
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/168989925702057105.png?w=480"
                    alt=""
                  />
                </a>
              </li> */}
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

        <hr className="line" />
        <div className="inner">
          <div className="thumbnail-list">
            <h2 className="title">
              <p className="text">🥇 20평 대! 공간 활용 best 4 🥇</p>
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
                      src="https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/168575585272673089.jpg?w=256&h=256&c=c"
                      alt=""
                      className="img"
                    />
                    <div className="bookmark">
                      <input
                        type="checkbox"
                        className="bookmark"
                        id="check-01-01"
                      />
                      <label htmlFor="check-01-01" />
                    </div>
                  </div>
                  <p className="info">
                    <span className="point">화려하지 않아도 괜찮아!</span>
                    소소하고 아늑하게 채워가는 우리집
                  </p>
                </a>
              </li>
              <li>
                <a href="#!">
                  <div className="thumbnail">
                    <span className="clip new">NEW</span>
                    <img
                      src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/168673148409716713.png?w=256&h=256&c=c"
                      alt=""
                      className="img"
                    />
                    <div className="bookmark">
                      <input
                        type="checkbox"
                        className="bookmark"
                        id="check-01-02"
                      />
                      <label htmlFor="check-01-02" />
                    </div>
                  </div>
                  <p className="info">
                    <span className="point">시공없이! 깔끔하고 단아하게</span>
                    연출한 25평 신축 아파트
                  </p>
                </a>
              </li>
              <li>
                <a href="#!">
                  <div className="thumbnail">
                    <img
                      src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/168404922154348860.jpg?w=256&h=256&c=c"
                      alt=""
                      className="img"
                    />
                    <div className="bookmark">
                      <input
                        type="checkbox"
                        className="bookmark"
                        id="check-01-03"
                      />
                      <label htmlFor="check-01-03" />
                    </div>
                  </div>
                  <p className="info">
                    <span className="point">간결하지만 다양한 색감을 담은</span>
                    24평 신혼 홈스타일링
                  </p>
                </a>
              </li>
              <li>
                <a href="#!">
                  <div className="thumbnail">
                    <img
                      src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/168760744795858307.jpg?w=256&h=256&c=c"
                      alt=""
                      className="img"
                    />
                    <div className="bookmark">
                      <input
                        type="checkbox"
                        className="bookmark"
                        id="check-01-04"
                      />
                      <label htmlFor="check-01-04" />
                    </div>
                  </div>
                  <p className="info">
                    <span className="point">구축 아파트에 취향을 하나씩</span>
                    홈스타일링으로 완성한 신혼집
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
              <p className="text">옷장 정리 👔 잘 하고 있나요?</p>
              <a href="!#" className="link blind">
                바로가기
              </a>
            </h2>
            <ul className="list">
              <li>
                <a href="#!">
                  <div className="thumbnail">
                    <img
                      src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/163144611971077234.JPG?w=256&h=256&c=c"
                      alt=""
                      className="img"
                    />
                    <div className="bookmark">
                      <input
                        type="checkbox"
                        className="bookmark"
                        id="check-02-01"
                      />
                      <label htmlFor="check-02-01" />
                    </div>
                  </div>
                  <p className="info">
                    <span className="point">방 하나에 장만한</span> 쇼룸 같은
                    드레스룸! 옷 수납의 정석
                  </p>
                </a>
              </li>
              <li>
                <a href="#!">
                  <div className="thumbnail">
                    <span className="clip new">NEW</span>
                    <img
                      src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/165927952595292987.jpg?w=256&h=256&c=c"
                      alt=""
                      className="img"
                    />
                    <div className="bookmark">
                      <input
                        type="checkbox"
                        className="bookmark"
                        id="check-02-02"
                      />
                      <label htmlFor="check-02-02" />
                    </div>
                  </div>
                  <p className="info">
                    <span className="point">부분시공의 효과는 놀라워✨</span>
                    감성 가득 25평 아파트
                  </p>
                </a>
              </li>
              <li>
                <a href="#!">
                  <div className="thumbnail">
                    <span className="clip new">NEW</span>
                    <img
                      src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/163194355732381468.jpg?w=256&h=256&c=c"
                      alt=""
                      className="img"
                    />
                    <div className="bookmark">
                      <input
                        type="checkbox"
                        className="bookmark"
                        id="check-02-03"
                      />
                      <label htmlFor="check-02-03" />
                    </div>
                  </div>
                  <p className="info">
                    <span className="point">탁 트인 구조</span> 단정한 34평
                    우드톤 아파트!
                  </p>
                </a>
              </li>
              <li>
                <a href="#!">
                  <div className="thumbnail">
                    <img
                      src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/165752232366574188.jpg?w=256&h=256&c=c"
                      alt=""
                      className="img"
                    />
                    <div className="bookmark">
                      <input
                        type="checkbox"
                        className="bookmark"
                        id="check-02-04"
                      />
                      <label htmlFor="check-02-04" />
                    </div>
                  </div>
                  <p className="info">
                    <span className="point">복층 아파트</span> 리모델링으로
                    독특한 구조 제대로 살리기
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>

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
    </>
  );
};
export default Main;
