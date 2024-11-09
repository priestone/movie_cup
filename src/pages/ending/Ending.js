import styled from "styled-components";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import { useEffect, useState } from "react";

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
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const movieData = await movieDetail(id);
        setData(movieData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(data);
  return (
    <>
      <Header />
      <Container>
        <Head>우승 영화 : {id}</Head>
        <Poster></Poster>
      </Container>
    </>
  );
};

export default Ending;
