import styled from "styled-components";
import Header from "../../components/Header";
import { Link, useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import { useEffect, useState } from "react";
import { ORIGINAL_URL } from "../../lib/imgUrl";
import Loading from "../../components/Loading";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Head = styled.h2`
  font-size: 40px;
  position: absolute;
  top: 50px;
  left: 41%;
`;

const Container = styled.div`
  padding: 150px 15%;
  display: flex;
  justify-content: space-between;

  a {
    position: absolute;
    bottom: 10px;
    left: 50%;
  }
`;

const Poster = styled.div`
  width: 500px;
  height: 715px;
  background-color: gray;
`;

const TextWrap = styled.div`
  width: 45%;
  h2 {
    font-size: 50px;
    font-weight: 700;
  }
  p {
    margin: 30px 0;
    font-size: 20px;
  }

  ul {
    margin: 10px 0;
  }
  li {
    font-size: 20px;
    margin: 10px 0;
  }

  span {
    font-size: 16px;
    opacity: 0.8;
    font-weight: 100;
    letter-spacing: 1px;
    line-height: 30px;
  }
`;

const GoHome = styled.button`
  all: unset;
  width: 150px;
  height: 50px;
  border: 1px solid white;
  position: absolute;
  bottom: 30px;
  left: 54%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-radius: 5px;
`;

const Ending = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const movieData = await movieDetail(id);
        setData(movieData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(data);
  return (
    <>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          <Header />
          <Container>
            <Head>32강 우승 영화</Head>
            <Poster
              style={{
                background: `url(${
                  data.poster_path ? ORIGINAL_URL + data.poster_path : null
                }) no-repeat center / cover`,
              }}
            ></Poster>
            <TextWrap>
              <h2>{data.title}</h2>
              <p>평점 : {data.vote_average}</p>
              <p>러닝타임 : {data.runtime}</p>
              <p>개봉일 : {data.release_date}</p>
              <ul>
                {data.genres.map((genre) => (
                  <li key={genre.id}>- {genre.name}</li>
                ))}
              </ul>
              <span>{data.overview.slice(0, 300)}...</span>
            </TextWrap>
          </Container>
          <Link to="/#">
            <GoHome>
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
              <p>홈 이동</p>
            </GoHome>
          </Link>
        </>
      )}
    </>
  );
};

export default Ending;
