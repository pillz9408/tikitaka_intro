import TikiFooter from "components/TikiFooter";
import TikiHeader from "components/TikiHeader";
import React from "react";

function TikiCost() {

    return (
        <div>
            <TikiHeader/>
            <div >
                <div>
                    <span>요금제 및 비용</span>
                    <strong>이용 요금</strong>
                    <div><img src="img/Cost/Cost.png"/></div>
                </div>
            </div>
            <TikiFooter/>
        </div>
    );
}

export default TikiCost;