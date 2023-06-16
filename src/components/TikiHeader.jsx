import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function TikiHeader() {

    return (
        <div className="header">
            <div className="inner">
                <h1 className="logo">
                    <Link to={URL.MAIN} className="w"><img src="/img/brain_bi.png" alt="로고" /></Link>
                    <Link to={URL.MAIN} className="m"><img src="/img/brain_bi.png" alt="로고" /></Link>
                </h1>
                <div className="gnb">
                    <h2 className="blind">주메뉴</h2>
                    <ul>
                        <li><NavLink className='nav-item' to={URL.COMPANY}>회사소개</NavLink></li>
                        <li><NavLink className='nav-item' to={URL.PRODUCT}>제품소개</NavLink></li>
                        <li><NavLink className='nav-item' to={URL.COST} >요금 및 비용</NavLink></li>
                        <li><NavLink className='nav-item' to={URL.QA}>Q&A</NavLink></li>
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default TikiHeader;