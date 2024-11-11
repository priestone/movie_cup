import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/Wrapper";

const Homeheader = styled.div`
  font-size: 30px;
  position: absolute;
  top: 20px;
  left: 50px;
  font-family: "Gowun Batang", serif;
  @media screen and (max-width: 440px) {
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Credit = styled.div`
  width: 1323px;
  height: 100vh;
  /* background-color: black; */
  padding: 306px 360px 0 388px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 70px;
    font-weight: 700;
  }

  @media screen and (max-width: 1000px) {
    h2 {
      font-size: 50px;
      font-weight: 700;
    }
  }

  @media screen and (max-width: 440px) {
    h2 {
      font-size: 44px;
      font-weight: 600;
    }
  }
`;

const TextWrap = styled.div`
  margin-top: 30px;
  width: 600px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  font-weight: 300;

  @media screen and (max-width: 1000px) {
    margin-top: 60px;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 440px) {
    margin-top: 40px;
    margin-bottom: 100px;
  }
`;

const TextWrap1 = styled.div`
  width: 280px;
  display: flex;
  align-items: end;
  margin: 0 auto;
  font-size: 24px;
  opacity: 0.6;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    font-size: 20px;
    line-height: 30px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const TextWrap2 = styled.div`
  width: 280px;
  display: flex;
  align-items: start;
  margin: 0 auto;
  font-size: 24px;
  opacity: 0.6;
  flex-direction: column;
  @media screen and (max-width: 1000px) {
    line-height: 30px;
    font-size: 20px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Start = styled.button`
  all: unset;
  width: 300px;
  height: 50px;
  font-size: 24px;
  border: 2px solid white;
  border-radius: 50px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #1d1d1d;
    font-weight: 700;
  }

  @media screen and (max-width: 1000px) {
    font-size: 20px;
    &:hover {
      background-color: #1d1d1d;
      color: white;
      font-weight: 400;
    }
  }

  @media screen and (max-width: 440px) {
    font-size: 16px;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    localStorage.clear();
    navigate("/ground");
  };

  return (
    <>
      <Homeheader>방구석 평론가</Homeheader>
      <Container>
        <Credit>
          <h2>영화 이상형 월드컵</h2>
          <TextWrap>
            <TextWrap1>
              <p>총 라운드</p>
              <p>테마</p>
            </TextWrap1>
            <TextWrap2>
              <p>32 강</p>
              <p>명작</p>
            </TextWrap2>
          </TextWrap>
          <Start onClick={handleStart}>시작</Start>
        </Credit>
      </Container>
      <PageTitle title={"홈"}></PageTitle>
    </>
  );
};

export default Home;
