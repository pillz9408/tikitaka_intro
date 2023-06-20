import React from "react";

import TikiFooter from "components/TikiFooter";
import TikiHeader from "components/TikiHeader";

function QnAPage() {
    return (
        <div>
            <TikiHeader></TikiHeader>
            <div>
                <section id="top" className="vb">
                    <div className="vb_wording wrap">
                        <div className="vb_bg pc"></div>
                        <div className="vb_bg pc">
                            <p className="wording_txt">
                                <strong>이용 문의</strong><br/>
                                <span>QR Code</span>
                            </p>
                            <img className="qna_QR" alt="연락처" src="img/QnA/QnaQR.png" />
                        </div>
                    </div>
                </section>
            </div>
            <TikiFooter></TikiFooter>
        </div>
    );
}

export default QnAPage;