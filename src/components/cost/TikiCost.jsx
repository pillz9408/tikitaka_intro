import React from "react";

function TikiCost() {

    return (
        <div>

            <section id="top" className="vb">
                <div className="vb_wording wrap">
                    <div className="vb_bg pc"></div>
                    <div className="vb_bg pc">
                        <p className="wording_txt">
                        <strong>이용 요금</strong>
                        </p>
                        <div><img className="cost_img" alt="요금표" src="img/Cost/Cost.png" /></div>
                        <div className="cost_txt mob">
                            <p className="cost_txt_head">개인</p>
                            <p className="cost_txt_title">일반회원</p>
                            <p className="cost_txt_body">월간 | ￦ 11000 /월<br/>연간 | ￦ 10450 /월 (5% 할인)</p>
                            <p className="cost_txt_head">단체</p>
                            <p className="cost_txt_title">요금제 A : 10명 이하</p>
                            <p className="cost_txt_body">월간 | ￦ 110,000 /월<br/>연간 | ￦ 104,500 /월 (5% 할인) </p>
                            <p className="cost_txt_title">요금제 B : 30명 이하</p>
                            <p className="cost_txt_body">월간 | ￦ 330,000 /월<br/>연간 | ￦ 297,000 /월 (10% 할인) </p>
                            <p className="cost_txt_title">요금제 C : 50명 이하</p>
                            <p className="cost_txt_body">월간 | ￦ 550,000 /월<br/>연간 | ￦ 467,500 /월 (15% 할인) </p>
                            <p className="cost_txt_title">요금제 D : 100명 이하</p>
                            <p className="cost_txt_body">월간 | ￦ 1,100,000 /월<br/>연간 | ￦ 880,000 /월 (15% 할인) </p>
                            <p className="cost_txt_title">요금제 E : 고객사 맞춤 서비스<br/>(협의를 통해 결정)</p>
                            <p className="cost_txt_head">단체</p>
                            <p className="cost_txt_title">(커스터마이징)</p>
                            <p className="cost_txt_title">기본 요금제 C 이상</p>
                            <p className="cost_txt_body">고객사의 서버운영 여부, <br/> 커스터마이징 작업 내용에 따라 가격 상이 </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TikiCost;