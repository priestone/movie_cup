import styled from "styled-components";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { movieDetail } from "../../api";
import Loading from "../../components/Loading";
import { ORIGINAL_URL } from "../../lib/imgUrl";

const moviedatas = [
  { num: 0, id: 278, title: "쇼생크 탈출" },
  { num: 1, id: 496243, title: "기생충" },
  { num: 2, id: 346646, title: "베테랑" },
  { num: 3, id: 24428, title: "어벤져스" },
  { num: 4, id: 299534, title: " 어벤져스: 엔드게임" },
  { num: 5, id: 13, title: "포레스트 검프" },
  { num: 6, id: 672, title: "해리 포터와 비밀의 방" },
  { num: 7, id: 329, title: "쥬라기 공원" },
  { num: 8, id: 37165, title: "트루먼 쇼" },
  { num: 9, id: 27205, title: "인셉션" },
  { num: 10, id: 745, title: "식스센스" },
  { num: 11, id: 372058, title: " 너의 이름은." },
  { num: 12, id: 4935, title: "하울의 움직이는 성" },
  { num: 13, id: 157336, title: "인터스텔라" },
  { num: 14, id: 19995, title: "아바타" },
  { num: 15, id: 1255, title: " 괴물" },
  { num: 16, id: 670, title: " 올드보이" },
  { num: 17, id: 274, title: " 양들의 침묵" },
  { num: 18, id: 862, title: "토이 스토리" },
  { num: 19, id: 771, title: "나 홀로 집에" },
  { num: 20, id: 11423, title: "살인의 추억" },
  { num: 21, id: 58, title: "캐리비안의 해적: 망자의 함" },
  { num: 22, id: 644, title: "에이 아이" },
  { num: 23, id: 242452, title: "변호인" },
  { num: 24, id: 269149, title: "주토피아" },
  { num: 25, id: 607, title: "맨 인 블랙" },
  { num: 26, id: 138843, title: "컨저링" },
  { num: 27, id: 313108, title: "국제시장" },
  { num: 28, id: 567646, title: "극한직업" },
  { num: 29, id: 158445, title: "7번방의 선물" },
  { num: 30, id: 38015, title: "타짜" },
  { num: 31, id: 42190, title: "클래식" },
  { num: 32, id: 10681, title: "월•E" },
  { num: 33, id: 129, title: "센과 치히로의 행방불명" },
  { num: 34, id: 150540, title: "인사이드 아웃" },
  { num: 35, id: 38, title: "이터널 선샤인" },
];

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
  /* background-color: salmon; */
  background: url(${ORIGINAL_URL}${(props) => props.$coverImg}) no-repeat center /
    cover;
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

const saveToLoacalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const loadFromLocalStorage = (key) => {
  const saveData = localStorage.getItem(key);
  return saveData ? JSON.parse(saveData) : null;
};

const Ground = () => {
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  const [remainingMovies, setRemainingMovies] = useState(
    loadFromLocalStorage("remainingMovies") || moviedatas
  );
  const [currentMovies, setCurrentMovies] = useState([]);

  const [selectedMovies, setSelectedMovies] = useState(
    loadFromLocalStorage("selectedMovies") || []
  );

  const RandomMovies = () => {
    const mix = [...remainingMovies].sort(() => 0.5 - Math.random());
    return [mix[0], mix[1]];
  };

  const handleMovieSelect = (selectedMovie) => {
    const updatedMovies = remainingMovies.filter(
      (movie) => movie.id !== selectedMovie.id
    );

    const updatedSelectedMovies = [...selectedMovies, selectedMovie];

    setRemainingMovies(updatedMovies);
    setSelectedMovies(updatedSelectedMovies);

    saveToLoacalStorage("remainingMovies", updatedMovies);
    saveToLoacalStorage("selectedMovies", updatedSelectedMovies);

    if (updatedMovies.length >= 2) {
      setCurrentMovies(RandomMovies());
    } else if (selectedMovies.length >= 2) {
      setRemainingMovies(selectedMovie);
      setSelectedMovies([]);
      saveToLoacalStorage("remainingMovies", selectedMovies);
      saveToLoacalStorage("selectedMovies", []);
    }
  };

  useEffect(() => {
    setCurrentMovies(RandomMovies());
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsloading(true);
      try {
        const movieData1 = await movieDetail(currentMovies[0]?.id);
        const movieData2 = await movieDetail(currentMovies[1]?.id);
        setData([movieData1, movieData2]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    };
    if (currentMovies.length === 2) fetchMovies();
  }, [currentMovies]);

  // console.log(data);
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
              <Poster
                $coverImg={data[0]?.poster_path}
                onClick={() => handleMovieSelect(currentMovies[0])}
              ></Poster>
              <p>vs</p>
              <Poster
                $coverImg={data[1]?.poster_path}
                onClick={() => handleMovieSelect(currentMovies[1])}
              ></Poster>

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

// useEffect(() => {
//   (async () => {
//     try {
//       const movieData = await movieDetail();
//       setData(movieData);
//       setIsloading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   })();
// }, []);
