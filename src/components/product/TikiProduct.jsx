import React from "react";
import HowToJoin from "./HowToJoin";
import HowToShare from "./HowToShare";
import FeatureExplain from "./FeatureExplain";
import TikiHeader from "components/TikiHeader";
import TikiFooter from "components/TikiFooter";

function TikiProduct() {
  return (
    <div>
      <TikiHeader />
      <section id="top" className="vb">
        <div className="vb_wording wrap">
          <div className="vb_bg pc"></div>
          <div className="vb_bg pc">
            <p className="wording_txt">
              <span className="point point_txt font_blue">티키타카</span>
              <span> 소개</span>
            </p>
            <img src="" />
          </div>
        </div >

          <h4 className='product_subtitle'>1. 화상회의방 입장 방법</h4>
          <HowToJoin></HowToJoin>
          <h4 className='product_subtitle'>2. 화상회의방 공유 방법</h4>
          <HowToShare></HowToShare>
          <h4 className='product_subtitle'>3. 회의실 아이콘/기능 설명</h4>
          <FeatureExplain></FeatureExplain>
      </section>
      <TikiFooter />
    </div>
        );

}

export default TikiProduct;