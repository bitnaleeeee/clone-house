import React from "react";
import Header from '../../components/Header';
import './Main.scss';

const Main = () => {
  return (
    <>
        <Header />
        <div className="main" id="main">

          <div className="slide-wrap">
            <ul className="slide-inner">
              <li><a href="#!"><img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/168016841510784427.png?w=480" alt="" /></a></li>
            </ul>
          </div>

          <div className="visual-menu">
            <ul className="list">
              <li><a href="#!"><img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167262690767101882.png?w=256" alt="" /><span>쇼핑하기</span></a></li>
              <li><a href="#!"><img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/168811505553448516.png?w=256" alt="" /><span>오!세일</span></a></li>
              <li><a href="#!"><img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198007152582471.png?w=256" alt="" /><span>오늘의딜</span></a></li>
              <li><a href="#!"><img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/168661846720664430.png?w=256" alt="" /><span>오늘의발견</span></a></li>
              <li><a href="#!"><img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198009533480922.png?w=256" alt="" /><span>장보기</span></a></li>
              <li><a href="#!"><img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198010271968429.png?w=256" alt="" /><span>집들이</span></a></li>
              <li><a href="#!"><img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167505411234148010.png?w=256" alt="" /><span>취향의발견</span></a></li>
              <li><a href="#!"><img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198012024333402.png?w=256" alt="" /><span>빠른배송</span></a></li>
              <li><a href="#!"><img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198021046015480.png?w=256" alt="" /><span>쉬운이사</span></a></li>
              <li><a href="#!"><img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/167198022841390557.png?w=256" alt="" /><span>리모델링</span></a></li>
            </ul>
          </div>
        </div>
    </>
  );
};
export default Main;