import React from "react";

function QnAPage() {
    return (
        <div>
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
        </div>
    );
}

export default QnAPage;