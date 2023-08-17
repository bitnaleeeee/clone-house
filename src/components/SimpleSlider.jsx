import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const SimpleSlider = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // 슬라이드를 자동으로 넘길지 여부
    autoplaySpeed: 5000, // 자동으로 넘길 시 시간 간격
    // nextArrow: <NextArrow />, // 화살표 버튼을 커스텀해서 사용
    // prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          {/* 슬라이드 구현해주세요 */}
          <div className="slide-wrap">
            <ul className="slide-inner">
              <li>
                <a href="#!">
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169218506755503578.png?w=3840"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* 슬라이드 구현해주세요 */}
          <div className="slide-wrap">
            <ul className="slide-inner">
              <li>
                <a href="#!">
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169202061984463470.png?w=3840"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="slide-wrap">
            <ul className="slide-inner">
              <li>
                <a href="#!">
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169218565564968581.png?w=3840"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="slide-wrap">
            <ul className="slide-inner">
              <li>
                <a href="#!">
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169218574660752028.png?w=3840"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="slide-wrap">
            <ul className="slide-inner">
              <li>
                <a href="#!">
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169202177679087019.png?w=3840"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="slide-wrap">
            <ul className="slide-inner">
              <li>
                <a href="#!">
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169202186349352821.png?w=3840"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </Slider>
      </div>
    </>
  );
};

// const NextArrow = ({ onClick }) => {
//   return (
//     <button onClick={onClick} type="button" style={{ background: "grey" }}>
//       다음
//     </button>
//   );
// };

// const PrevArrow = ({ onClick }) => {
//   return (
//     <button onClick={onClick} type="button" style={{ background: "grey" }}>
//       이전
//     </button>
//   );
// };

export default SimpleSlider;
