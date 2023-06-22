import React from "react";

function QnAPage() {
    return (
        <div>
            <div>
                <section id="top" className="vb">
                    <div className="vb_wording wrap_c">
                        {/* <div className="vb_bg pc"></div> */}
                        <div className="vb_bg">
                            <p className="wording_txt2">
                                <strong>이용 문의</strong><br/>
                                <span>(하단의 QR코드를 스캔해주세요)</span>
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