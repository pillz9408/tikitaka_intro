import TikiFooter from "components/TikiFooter";
import TikiHeader from "components/TikiHeader";
import React from "react";

function TikiCost() {

    return (
        <div>
            <TikiHeader />
            <section id="top" className="vb">
                <div className="vb_wording wrap">
                    <div className="vb_bg pc"></div>
                    <div className="vb_bg pc">
                        <p className="wording_txt">
                        <strong>이용 요금</strong>
                        </p>
                        <div><img src="img/Cost/Cost.png" /></div>
                    </div>
                </div>
            </section>
            <TikiFooter />
        </div>
    );
}

export default TikiCost;