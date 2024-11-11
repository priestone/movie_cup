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
  padding: 150px 20%;
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
  /* display: flex;
  flex-direction: column; */
  position: relative;
  width: 45%;
  h2 {
    font-size: 50px;
    font-weight: 700;
  }
  p {
    margin: 20px 0;
    font-size: 20px;
  }

  ul {
    margin-top: 50px;
    margin-bottom: 30px;
  }
  li {
    font-size: 20px;
    margin: 10px 0;
  }

  h5 {
    font-size: 18px;
    line-height: 18px;
    opacity: 0.9;
  }

  span {
    opacity: 0.8;
    font-weight: 100;
    letter-spacing: 1px;
    line-height: 30px;
  }

  a {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const GoHome = styled.button`
  all: unset;

  width: 150px;
  height: 50px;
  padding: 0 10px;
  border: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  &:hover span {
    transform: translateX(50px);
    transition: 0.5s;
  }
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
              <p>평점 : {data.vote_average} 점</p>
              <p>러닝타임 : {data.runtime} 분</p>
              <p>개봉일 : {data.release_date}</p>
              <ul>
                {data.genres.map((genre) => (
                  <li key={genre.id}>- {genre.name}</li>
                ))}
              </ul>
              <h5>줄거리</h5>
              <br></br>
              <span>{data.overview.slice(0, 300)}...</span>
              <Link to="/#">
                <GoHome>
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                  <p>다시하기</p>
                </GoHome>
              </Link>
            </TextWrap>
          </Container>
        </>
      )}
    </>
  );
};

export default Ending;
