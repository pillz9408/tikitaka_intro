import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function TikiHeader() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown);
    };

    const isActive = (_, location) => {
        return (
            location.pathname.includes('/company') ||
            location.pathname.includes('/product') ||
            location.pathname.includes('/cost') ||
            location.pathname.includes('/QnA')
        );
    };

    return (
        <div className="header">
            <div className="inner">
                <div className="logo">
                    <Link to="/" className="m">
                        <img src="/img/TIki.png" alt="로고1" />
                    </Link>
                    {/* <Link to="/" className="w">
                        <img src="/img/brain_bi.png" alt="로고2" />
                    </Link> */}
                </div>
                <div className="gnb">
                    <ul>
                        <li>
                            <NavLink
                                to="/company"
                                isActive={isActive}
                                onMouseEnter={toggleDropdown}
                                onClick={handleDropdownClick}
                            >
                                회사소개
                            </NavLink>
                            {showDropdown && (
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink
                                            to="/company/orangepixel"
                                            isActive={isActive}
                                        >
                                            오렌지픽셀
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/company/thebrains"
                                            isActive={isActive}
                                        >
                                            더브레인에스
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <NavLink to="/product" isActive={isActive}>
                                제품소개
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cost" isActive={isActive}>
                                요금제 및 비용
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/QnA" isActive={isActive}>
                                이용문의
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TikiHeader;