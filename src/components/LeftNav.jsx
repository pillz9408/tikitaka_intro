import React from 'react';
import { NavLink } from 'react-router-dom';

function LeftNav() {

    const isActive = (_, location) => {
        return (
            location.pathname.includes('/company') ||
            location.pathname.includes('/product') ||
            location.pathname.includes('/cost') ||
            location.pathname.includes('/QnA')
        );
    };

    return (
        <div className="all_menu Mobile closed">
            <button className="btn noscript close" type="button">전체메뉴 닫기</button>
            <div className="menu">
                <ul>
                    <ul>
                        <li> <NavLink
                            to="/company"
                            isActive={isActive}
                            onMouseEnter={toggleDropdown}
                            onClick={handleDropdownClick}
                        >
                            회사소개
                        </NavLink></li>
                        <li> <NavLink to="/company/orangepixel" isActive={isActive}>
                        오렌지픽셀
                    </NavLink></li>
                    <li> <NavLink to="/company/thebrains" isActive={isActive}>
                        더브레인에스
                    </NavLink></li>

                    </ul>
                    <li> <NavLink to="/product" isActive={isActive}>
                        제품소개
                    </NavLink></li>
                    <li><NavLink to="/cost" isActive={isActive}>
                        요금제 및 비용
                    </NavLink></li>
                    <li><NavLink to="/QnA" isActive={isActive}>
                        이용문의
                    </NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default LeftNav;