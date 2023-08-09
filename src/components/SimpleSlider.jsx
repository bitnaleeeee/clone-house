import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const SimpleSlider = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // 슬라이드를 자동으로 넘길지 여부
    autoplaySpeed: 5000, // 자동으로 넘길 시 시간 간격
  };

  return (
    <>
      <div>
        <Slider {...settings}>
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
              <ul className="list"></ul>
            </div>
          </div>

          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default SimpleSlider;
