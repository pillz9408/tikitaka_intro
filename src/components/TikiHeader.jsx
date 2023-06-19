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
                        <li><Link to ="/company">Company</Link></li>
                        <li><Link to ="/product">Product</Link></li>
                        <li><Link to ="/cost">Cost</Link></li>
                        <li><Link to ="/QnA">QnA</Link></li>
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default TikiHeader;