import React from "react";
import useTypingEffect from "hooks/useTypingEffect";

function TikiMain() {

    const texts = ["간단한 미팅", "비즈니스 회의", "LIVE 방송"];
    const delay = 300;
  
    const displayedText = useTypingEffect(texts, delay);

    return (
        <div>
            <section id="top" className="vb">
                <div className="vb_wording wrap">
                    <div className="vb_bg pc"></div>
                    <div className="vb_bg pc">
                        <p className="wording_txt">
                            <span className="moving_txt">{displayedText}</span>
                            <br />
                            언제 어디에서나
                            <br />
                            <span className="point point_txt font_blue">티키타카</span>
                            와 함께
                        </p>
                    </div>
                    <div className="vb_txt">
                        <div className="wrap">
                            <dl>
                                <dt>
                                    <span className="font_blue">01</span>
                                    글로벌 시대를 이끌어갈 티키타카만의 서비스!
                                </dt>
                                <dd>
                                    언어의 장벽이 없는 글로벌 커뮤니케이션 서비스!
                                    <br />
                                    어떤 언어로 대화해도, AI번역을 통해 자동으로 통역해줍니다.
                                </dd>
                            </dl>
                            <dl className="vb_s2">
                                <dt>
                                    <span className="font_blue">02</span>
                                    다양한 상황에 맞는 티키타카 최고의 서비스!
                                </dt>
                                <dd>
                                    화상 회의, 1:1 회의, Live 방송까지!
                                    <br />
                                    업무부터 동호회, 개인 방송까지 모든 것이 가능합니다.
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TikiMain;