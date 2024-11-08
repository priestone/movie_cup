import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const headerStyle = {
  pcPadding: "20px 50px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing:border-box;
    }

    body{
        background-color:#1d1d1d;
        color:white;
        font-family: "Noto Sans KR", sans-serif;
    }

    img{
        width:100%;
        display:block;
    }

    a{
        text-decoration:none;
    }
`;
