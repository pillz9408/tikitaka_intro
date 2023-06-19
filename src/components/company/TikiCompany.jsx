import TikiFooter from "components/TikiFooter";
import TikiHeader from "components/TikiHeader";
import React from "react";

function TikiCompany() {

    return (
        <div className="container">
            <TikiHeader/>
            <div className="c_wrap">
                <div className="contents SITE_INTRO" id="contents">
                
                    <h2 className="tit_4"> TheBrainS 소개</h2>
                    <><img src="img/Company/companyintro(5).png"></img></>
                </div>
            </div>
            <TikiFooter/>
        </div>

    );
}

export default TikiCompany