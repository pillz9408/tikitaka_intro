import React from 'react';
import { Link } from 'react-router-dom';

function TikiFooter() {
    return (
        <div className='wrapper'>
            <div className="footer">
                <div className="inner">
                    <div className="info">
                        <p className='footer_txt'>
                            <strong>(주) 오렌지픽셀 </strong> <br />
                            문의 메일 : ceo@orangepixel.co.kr | 전화 번호 : 010-3871-7182
                        </p>
                        <p className="copy">© 2023. orangepixel all rights reserved </p>
                    </div> 
                    <div className="logo">
                        <Link to="/company/orangepixel" className="m">
                            <img src="/img/logo_black.png" alt="로고1" />
                        </Link>
                        <Link to="/company" className='and_img'> <img src='/img/and.png' /> </Link>
                        <Link to="/company/thebrains" className="w">
                            <img src="/img/brain_bi.png" alt="로고2" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TikiFooter;