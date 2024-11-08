import styled from "styled-components";
import { headerStyle } from "../GlobalStyled";

const Logo = styled.h3`
  font-size: 30px;
  font-family: "Gowun Batang", serif;
  padding: ${headerStyle.pcPadding};
`;

const Header = () => {
  return (
    <div>
      <Logo>방구석 평론가</Logo>
    </div>
  );
};

export default Header;
