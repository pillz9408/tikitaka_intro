import React from "react";
import { NavLink,Link, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MobileHead() {
  const location = useLocation(); // 현재 URL 경로 가져오기

  const isActive = (_, location) => {
    return (
      location.pathname.includes('/company') ||
      location.pathname.includes('/product') ||
      location.pathname.includes('/cost') ||
      location.pathname.includes('/QnA')
    );
  };

  return (
    <div className="m_header">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="m_wrap">
          <Navbar.Brand as={Link} to="/">
            <img className="logo" src="/img/Tiki.png" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="회사소개"
                as={NavLink}
                to="/company"
                isActive={isActive}
                className={location.pathname === "/company" ? "active" : ""}
              >
                <NavDropdown.Item
                  as={NavLink}
                  to="/company/orangepixel"
                  isActive={isActive}
                  className={location.pathname === "/company" ? "active" : ""}
                >
                  오렌지픽셀
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/company/thebrains"
                  isActive={isActive}
                  className={location.pathname === "/company" ? "active" : ""}
                >
                  더브레인에스
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={NavLink}
                to="/product"
                isActive={isActive}
                className={location.pathname === "/product" ? "active" : ""}
              >
                제품소개
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/cost"
                isActive={isActive}
                className={location.pathname === "/cost" ? "active" : ""}
              >
                요금제 및 비용
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/qna"
                isActive={isActive}
                className={location.pathname === "/qna" ? "active" : ""}
              >
                이용문의
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MobileHead;