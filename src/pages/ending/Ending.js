import styled from "styled-components";
import Header from "../../components/Header";

const Head = styled.h2`
  font-size: 40px;
  position: absolute;
  top: 50px;
  left: 41%;
`;

const Container = styled.div`
  padding: 150px 15%;
`;

const Poster = styled.div`
  width: 500px;
  height: 715px;
  background-color: gray;
`;

const Ending = () => {
  return (
    <>
      <Header />
      <Container>
        <Head>월드컵 우승 영화</Head>
        <Poster></Poster>
      </Container>
    </>
  );
};

export default Ending;
