import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PopupAppJoin from "../../components/PopupAppJoin";
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
                      [단하루 선착순81,900원] 샤오미 미홀 쓰레기통 자동센서 스마트 휴지통 T7SPRO
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
        <div className="inner">
          <div className="review-list">
            <h2 className="title">
              <p className="text">유저들의 인테리어 시공 리뷰</p>
              <a href="!#" className="link blind">
                바로가기
              </a>
            </h2>
            <ul className="list">
              <li>
                <div className="img">
                  <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/expert_reviews/168649136443965580.jpg?w=256&h=256&c=c" alt="" />
                </div>
                <div className="info">
                  <strong className="title">비나인스튜디오</strong>
                  <p className="text">첫 인테리어 시공이라 여러가지로 지식이 부족했던 제게 처음부터 끝까지 많은 정보와 아이디어 제안을 해주셨고 실제 시공 결과도 만족스러웠습니다. 무엇보다 생활하면서 필요한 부분이지만, 제가 미처 챙기지 못한 부분도  곳곳을 꼼꼼하게 마무리 해주셔서 현재 생활하면서 만족감이 높은것 같습니다. 특히 한달 정도 지내보니 그런 부분들이 눈에 들어오고 그런 디테일에 감동했습니다 :) 전담 디자이너 선생님이 커뮤니케이션에 많이 신경을 써주셨고 실제 시공 과정에도 많은 도움을 주셔서 감사하게 생각하고 있습니다. 우선 시공 용어 등이 너무 낯설고 제작 방식에 대한 이해도가 낮아서  결정을 하는데 어려운 부분을 그때마다 반복해서 잘 설명해주셨고  레퍼런스로 설명을 잘 해주셔서 제작 과정을 이해하고 결정하는데 많은 도움이 됬습니다. 사실 턴키지만 이 부분이 가장 서로 어려운 부분이라고 생각했었고  제가 미숙했는데 처음부터 끝까지 친절한 응대에 감사드립니다.</p>
                </div>
              </li>
              <li>
                <div className="img">
                  <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/expert_reviews/168630428095280805.jpg?w=256&h=256&c=c" alt="" />
                </div>
                <div className="info">
                  <strong className="title">디자인프로그</strong>
                  <p className="text">당초 큰 계획을 갖고 시작했던 인테리어는 아니었는데, 디자인프로그 대표님을 만나 같이 알아보고, 공부해가며 고군분투한 집이라 힘들었지만 그만큼 너무 만족스러운 집을 얻게 되었어요! 원하는 색감에 맞추기 위해 벽 마감을 필름/도배/페인트 각각 나눠서 진행하고, 필름 색감이나 페인트 색감도 대표님과 계속 소통하며 결정했는데 결과적으로는 너무 예쁘게 잘 나와서 만족스럽습니다 ㅎㅎ 안방 침대 헤드도 같이 디자인, 설계해가면서 만들었는데 너무 맘에 들어요! 집 전체적으로 마감과 디테일(주방, 욕실, 가구, 등등)이 너무 간결하면서 군더더기 없어서 그만큼 집이 더 예뻐 보이는 것 같아요. 해외 직구로 구매한 각종 제품들의 납기를 맞추기도 힘들었는데, 대표님이 그때마다 일정 조율을 해주셔서 무사히 시공 할 수 있었어요. 공사 중간에 크고 작은 문제들이 일어났을 때도 사진으로, 유선 상으로 꼬박꼬박 전달해주시면서 걱정 말라고 절 안심 시키면서 문제들을 다 해결해 주셨습니다! 또, 계약 전 미팅 때부터 소통이 제일 중요하다고 하셨는데, 매일 톡방에 시공 과정을 공유해주시면서 소통해주셔서 그만큼 더 신뢰가 갔던 것 같아요. 입주 후에 간단한 A/S 처리도 바로바로 해주시는 점도 너무 좋습니다ㅎㅎ 예쁜집 만들어주셔서 감사합니다 사장님!! 번창하시고, 행복하세요!!</p>
                </div>
              </li>
              <li>
                <div className="img">
                  <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/expert_reviews/168644036693797192.jpg?w=256&h=256&c=c" alt="" />
                </div>
                <div className="info">
                  <strong className="title">모드니 인테리어</strong>
                  <p className="text">신혼집 인테리어를 앞두고 예산과 취향사이의 줄다리기 속에서 합리적인 가격으로 깔끔한 인테리어 포트폴리오를 갖고 있는 업체를 찾으려는 두가지 욕심 하나 놓치지 않고 모드니인테리어 방문 전에 업체 미팅을 여러곳 진행했었습니다. 이전에 상담했던 곳들은 예산이랑 취향의 불균형으로 결정하기 어려웠는데, 모드니인테리어 사무실 방문해서 상담과 견적을 받아보니 가격이 합리적으로 느껴졌을뿐 아니라 항목별로 단가와 가격을 볼 수 있어서 투명하게 보였어요. 무엇보다 사장님이 쿨내 진동하시게 이건 되고 저건 안될것 같아요. 그렇지만 고객님이 꼭 하고싶으시다면.. 음.. 이렇게 하시죠! 이런 스타일?? 철거가 시작되고 발생되는 문제점들 바로 알려주시고 공사 중에 갑작스럽게 오! 이것도 하고싶다 싶은 것도 다 들어주시고 무엇보다 철거 후 상태가 예상과 같았는지 공사 일정 딜레이 없이 완성되어서 문제없이 완료되었습니다. 둘 다 직장인이라 시간내서 공사중인 현장 방문이 어려웠는데 단톡방에 항상 사진 공유해주셔서 현장 체크가 바로바로 가능했어요. 인테리어 욕심은 있는데 구체적인 취향은 없어서 사장님께 추천으로 진행요청 드렸던 부분들도 너무 만족스러웠습니다! 알잘딱깔센이 인간이라면 모드니 인테리어 실장님이 아닐까요?? 입주청소까지 마치고 집 살펴보니 큰 하자요청할 것도 없었지만 소소하게 수리 요청드린 부분 바로바로 해결해주셔서 너무 시원시원합니다.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Main;