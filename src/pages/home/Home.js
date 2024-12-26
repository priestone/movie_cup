import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/Wrapper";
import Header from "../../components/Header";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Credit = styled.div`
  /* max-width: 1323px; */
  width: 1323px;
  height: 100vh;
  /* background-color: black; */
  padding: 306px 360px 0 360px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 70px;
    font-weight: 700;
  }

  @media screen and (max-width: 1000px) {
    max-width: 1000px;
    padding: 306px 150px 0 150px;
    width: 100%;
    h2 {
      font-size: 50px;
      font-weight: 700;
    }
  }

  @media screen and (max-width: 440px) {
    max-width: 440px;
    width: 100%;
    padding: 200px 0 0 0;

    h2 {
      font-size: 40px;
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
    margin-bottom: 100px;
  }

  @media screen and (max-width: 440px) {
    justify-content: center;
    max-width: 300px;
    width: 100%;
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

  p {
    margin-top: 20px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 20px;
    line-height: 30px;
    p {
      margin-top: 14px;
    }
  }

  @media screen and (max-width: 440px) {
    width: 100px;
    font-size: 16px;
    margin: 00px 10px;
    line-height: 24px;

    p {
      margin-top: 10px;
    }
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

  p {
    margin-top: 20px;
  }

  @media screen and (max-width: 1000px) {
    line-height: 30px;
    font-size: 20px;

    p {
      margin-top: 14px;
    }
  }

  @media screen and (max-width: 440px) {
    margin: 0 10px;
    width: 100px;
    font-size: 16px;
    line-height: 24px;

    p {
      margin-top: 10px;
    }
  }
`;

const Start = styled.button`
  all: unset;
  width: 300px;
  height: 50px;
  font-size: 24px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  text-align: center;
  font-size: 20px;
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
      <Header></Header>
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
