import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px;
  text-align: center;
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 40px;
  }
  h3 {
    margin-top: 50px;
    font-size: 30px;
    font-family: "Gowun Batang", serif;
  }
  h4 {
    margin-top: 30px;
    font-size: 24px;
    opacity: 0.6;
  }
`;

const GoHome = styled.button`
  all: unset;
  width: 150px;
  height: 50px;
  border: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px auto;
  padding: 0 10px;
  border-radius: 5px;
  &:hover span {
    transform: translateX(50px);
    transition: 0.5s;
  }
`;

const PageNotFound = () => {
  return (
    <Container>
      <h1>Page Not Found</h1>
      <h2>404</h2>
      <h3>길을 잃으셨군요! 걱정마세요 제가 도와줄게요!</h3>
      <h4>아래의 버튼을 눌러 홈으로 갈 수 있습니다.</h4>
      <Link to="/#">
        <GoHome>
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
          <p>홈 이동</p>
        </GoHome>
      </Link>
    </Container>
  );
};

export default PageNotFound;
