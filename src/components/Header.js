import styled from "styled-components";
import { headerStyle } from "../GlobalStyled";
import { Link } from "react-router-dom";

const HeaderWrap = styled.div`
  width: 100%;
  height: 100px;
  padding: ${headerStyle.pcPadding};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  a {
    width: 300px;
  }

  @media screen and (max-width: 440px) {
    height: 50px;
    padding: ${headerStyle.moPadding};
    position: fixed;
    top: 0;
    left: 0;
  }
`;

const Logo = styled.h2`
  font-size: 30px;
  font-family: "Gowun Batang", serif;
  @media screen and (max-width: 440px) {
    font-size: 16px;
  }
`;

const Header = () => {
  return (
    <HeaderWrap>
      <Logo>
        <Link to="/">방구석 평론가</Link>
      </Logo>
    </HeaderWrap>
  );
};

export default Header;
