import styled from "styled-components";
import { headerStyle } from "../GlobalStyled";
import { Link } from "react-router-dom";

const HeaderWrap = styled.h3`
  width: 100%;
  height: 100px;
  padding: ${headerStyle.pcPadding};
  position: fixed;
  z-index: 10;
  a {
    width: 300px;
  }
`;

const Logo = styled.h3`
  font-size: 30px;
  font-family: "Gowun Batang", serif;
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
