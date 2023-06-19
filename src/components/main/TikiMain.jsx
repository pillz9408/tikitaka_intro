import TikiFooter from "components/TikiFooter";
import TikiHeader from "components/TikiHeader";
import React from "react";

function TikiMain() {

    return (
        <div>
            <TikiHeader/>
            <div >
                <div>
                    <span>다국어 화상회의 플랫폼</span>
                    <strong>티키타카</strong>
                </div>
            </div>
            <TikiFooter/>
        </div>
    );
}

export default TikiMain;