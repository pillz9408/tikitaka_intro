import TikiFooter from "components/TikiFooter";
import TikiHeader from "components/TikiHeader";
import React from "react";

function TikiCompany() {

    return (
        
            <div>
                <TikiHeader />
                <section id="top" className="vb">
                    <div className="vb_wording wrap">
                        <div className="vb_bg pc"></div>
                        <div className="vb_bg pc">
                            <p className="wording_txt">
                                <strong>회사 소개</strong>
                            </p>
                            <div><img className="company_intro_img" src="img/Company/company_intro_orange.png" /></div>
                        </div>
                    </div>
                </section>
                <TikiFooter></TikiFooter>
            </div>
    );
}

export default TikiCompany