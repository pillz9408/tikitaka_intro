import React from 'react';
import { Link } from 'react-router-dom';

function TikiHeader() {

    return (
        <div className="header">
            <div className="inner">
                <h1 className="logo">
                    <Link to="/"className="w"><img src="/img/brain_bi.png" alt="로고" /></Link>
    
                </h1>
                <div className="gnb">
                    <ul>
                        <li><Link to ="/company">회사소개</Link></li>
                        <li><Link to ="/product">제품소개</Link></li>
                        <li><Link to ="/cost">요금 및 비용</Link></li>
                        <li><Link to ="/QnA">이용 문의</Link></li>
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default TikiHeader;