import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Credit = styled.div`
  width: 1323px;
  height: 100vh;
  background-color: black;
  padding: 306px 360px 0 388px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 70px;
  }
`;

const TextWrap = styled.div`
  margin-top: 30px;
  width: 600px;
  display: flex;
  justify-content: space-between;
`;

const TextWrap1 = styled.div`
  width: 280px;
  display: flex;
  align-items: end;
  margin: 0 auto;
  font-size: 30px;
  opacity: 0.6;
  flex-direction: column;
`;

const TextWrap2 = styled.div`
  width: 280px;
  display: flex;
  align-items: start;
  margin: 0 auto;
  font-size: 30px;
  opacity: 0.6;
  flex-direction: column;
`;

const Start = styled.button`
  all: unset;
  width: 300px;
  height: 50px;
  border: 1px solid white;
  border-radius: 50px;
  margin-top: 100px;
  text-align: center;
`;

const Home = () => {
  return (
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
        <Start>시작</Start>
      </Credit>
    </Container>
  );
};

export default Home;
