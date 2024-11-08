import styled from "styled-components";
import Header from "../../components/Header";

const Container = styled.div`
  width: 100%;
  padding: 0 135px;
`;

const Title = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    width: 300px;
    height: 50px;
    font-size: 30px;
    text-align: center;
    line-height: 50px;
    color: white;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    width: 100px;
    font-size: 30px;
    font-weight: 900;
    text-align: center;
  }
`;

const HintWrap = styled.div`
  width: 275px;
  height: 715px;
  background-color: lightgray;
`;
const Poster = styled.div`
  width: 500px;
  height: 715px;
  background-color: salmon;
`;

const Ground = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Title>
          <h4>32강 월드컵 </h4>
        </Title>
        <Main>
          <HintWrap></HintWrap>
          <Poster></Poster>
          <p>vs</p>
          <Poster></Poster>
          <HintWrap></HintWrap>
        </Main>
      </Container>
    </>
  );
};

export default Ground;
