import React from "react";
import HowToJoin from "./HowToJoin";
import HowToShare from "./HowToShare";
import FeatureExplain from "./FeatureExplain";
import TikiHeader from "components/TikiHeader";
import TikiFooter from "components/TikiFooter";

function TikiProduct(){
    return(
        <div className="">
          <TikiHeader/>    
        <h2 className='product_title'>티키타카 소개</h2>
          <h3><img src="" /></h3>

          
          <h4 className='product_subtitle'>1. 화상회의방 입장 방법</h4>
          <HowToJoin></HowToJoin>
          <h4 className='product_subtitle'>2. 화상회의방 공유 방법</h4>
          <HowToShare></HowToShare>
          <h4 className='product_subtitle'>3. 회의실 아이콘/기능 설명</h4>
          <FeatureExplain></FeatureExplain>
          <TikiFooter/>
        </div>
    );

}

export default TikiProduct;