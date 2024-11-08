import styled from "styled-components";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { movieDetail } from "../../api";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

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

const ShowWrap = styled.div`
  width: 600px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Show = styled.button`
  all: unset;
  width: 120px;
  height: 80px;
  background-color: white;
  border-radius: 10px;
`;

const Ground = () => {
  // const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const movieData = await movieDetail(278);
        setData(movieData);
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {isLoading ? (
        <Loading></Loading>
      ) : (
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
            <ShowWrap>
              <Show></Show>
              <Show></Show>
              <Show></Show>
            </ShowWrap>
          </Container>
        </>
      )}
    </>
  );
};

export default Ground;
