import React from "react";
import HowToJoin from "./HowToJoin";
import HowToShare from "./HowToShare";
import FeatureExplain from "./FeatureExplain";

function TikiProduct() {
  return (
    <div>
      <body>
        <section id="top" className="vb">
          <div className="vb_wording wrap">
            <div className="vb_bg pc"></div>
            <div className="vb_bg pc">
              <p className="wording_txt">
                <span className="point point_txt font_blue">티키타카</span>
                <span> 소개</span>
              </p>
              <img className="product_intro_img" alt="제품 소개 이미지" src="img/Product/tiki_intro.png" /><br />
              <img className="product_intro_img" alt="제품 소개 이미지" src="img/Product/tiki_intro2.png" /><br />
              <img className="product_intro_img" alt="제품 소개 이미지" src="img/Product/tiki_intro3.png" /><br />
              
              <h4 className='subtitle'>1. 화상회의방 입장 방법</h4>
              <HowToJoin></HowToJoin>
              <h4 className='subtitle'>2. 화상회의방 공유 방법</h4>
              <HowToShare></HowToShare>
              <h4 className='subtitle'>3. 회의실 아이콘/기능 설명</h4>
              <FeatureExplain></FeatureExplain>
            </div>
          </div>
        </section>
      </body>
    </div>

  );

}

export default TikiProduct;