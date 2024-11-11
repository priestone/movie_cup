import styled from "styled-components";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { movieCredits, movieDetail } from "../../api";
import Loading from "../../components/Loading";
import { ORIGINAL_URL, W500_URL } from "../../lib/imgUrl";
import { useNavigate } from "react-router-dom";

const moviedatas = [
  { num: 0, id: 278, title: "쇼생크 탈출" },
  { num: 1, id: 496243, title: "기생충" },
  { num: 2, id: 346646, title: "베테랑" },
  { num: 3, id: 24428, title: "어벤져스" },
  { num: 4, id: 299534, title: " 어벤져스: 엔드게임" },
  { num: 5, id: 13, title: "포레스트 검프" },
  { num: 6, id: 672, title: "해리 포터와 비밀의 방" },
  { num: 7, id: 10681, title: "월•E" },
  { num: 8, id: 37165, title: "트루먼 쇼" },
  { num: 9, id: 27205, title: "인셉션" },
  { num: 10, id: 150540, title: "인사이드 아웃" },
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
  { num: 25, id: 129, title: "센과 치히로의 행방불명" },
  { num: 26, id: 138843, title: "컨저링" },
  { num: 27, id: 313108, title: "국제시장" },
  { num: 28, id: 567646, title: "극한직업" },
  { num: 29, id: 158445, title: "7번방의 선물" },
  { num: 30, id: 38015, title: "타짜" },
  { num: 31, id: 42190, title: "클래식" },
];

const Bg_1 = styled.div`
  display: none;
  @media screen and (max-width: 440px) {
    position: absolute;
    top: 93px;
    left: 0;
    z-index: -10;
    font-size: 20px;
    line-height: 30px;
    width: 95%;
    height: 250px;
    background-color: gray;
    display: block;
  }
`;

const Bg_2 = styled.div`
  display: none;
  @media screen and (max-width: 440px) {
    position: absolute;
    bottom: 233px;
    right: 0;
    z-index: -10;
    font-size: 20px;
    line-height: 30px;
    width: 95%;
    height: 250px;
    background-color: gray;
    display: block;
  }
`;

const Container = styled.div`
  /* width: 100%; */
  /* padding: 0 135px; */
  display: flex;
  /* flex-direction: row;
  padding: 0 30px;
  height: 100vh; */
  /* @media screen and (min-width: 441px) {
    flex-direction: row;
  } */

  @media screen and (max-width: 440px) {
    width: 100%;
    height: 550px;
    /* display: flex; */
    flex-direction: column;
    /* margin-top: 30px; */
    /* padding: 0 15px; */
  }
`;

const Title = styled.div`
  width: 100%;
  /* height: 120px; */
  /* display: flex; */
  /* position: absolute; */
  /* align-items: center; */
  h4 {
    position: absolute;
    top: 50px;
    left: 50%;
    width: 300px;
    height: 50px;
    transform: translate(-50%, 0);
    font-size: 30px;
    text-align: center;
    line-height: 50px;
    color: white;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 30px;
  }
  @media screen and (min-width: 441px) {
    width: 150px;
    /* height: 30px; */
    font-size: 20px;
    position: absolute;
    line-height: 30px;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media screen and (max-width: 440px) {
    width: 100%;
    margin-bottom: 63px;
    height: 30px;

    h4 {
      width: 100px;
      height: 20px;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const Main = styled.div`
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  display: flex;
  /* position: relative; */
  width: 100%;
  height: 100%;
  h5 {
    text-align: center;
    width: 100%;
    height: 50px;
    line-height: 50px;
    /* transform: translateX(-2px); */
    /* height: 10px; */
  }

  @media screen and (min-width: 441px) {
    max-width: 1785px;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 0 75px;
    p {
      width: 100px;
      font-size: 30px;
      font-weight: 900;
      text-align: center;
    }
    h5 {
      /* width: 100px; */
      /* height: 543px; */
      /* line-height: 543px; */
      width: 50px;
      height: auto;
      font-size: 30px;
      font-weight: 900;
      text-align: center;
    }
  }
`;

const Mo_1 = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  /* position: absolute;
  top: 0;
  left: 0; */
  justify-content: end;
  align-items: center;
  padding: 0 7% 0 0;
  @media screen and (min-width: 441px) {
    position: unset;
    /* width: 39%; */
    width: 500px;
    height: 85%;
    padding: 3%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 1400px) {
  }
`;

const Mo_2 = styled.div`
  display: flex;
  width: 100%;
  height: 48%;
  /* position: absolute;
  bottom: 0;
  right: 0; */
  justify-content: start;
  padding: 0 0 0 7%;
  @media screen and (min-width: 441px) {
    position: unset;
    width: 500px;
    /* width: 39%; */
    height: 85%;
    padding: 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 1400px) {
  }
`;

const HintWrap_1 = styled.div`
  /* margin-right: 30px; */
  @media screen and (min-width: 1401px) {
    /* width: 100px; */
    /* height: 430px; */
  }
  @media screen and (min-width: 441px) {
    /* height: 300px; */
    margin: 0 10px;
  }
`;
const HintWrap_2 = styled.div`
  /* margin-left: 30px; */
  /* width: 100px; */
  @media screen and (min-width: 1401px) {
    /* height: 430px; */
  }
  @media screen and (min-width: 441px) {
    /* height: 300px; */
    margin: 0 10px;
  }
`;

const Score = styled.div.attrs((props) => ({
  style: {
    display: props.scoreLight ? "block" : "none",
  },
}))`
  text-align: center;
  h2 {
    font-size: 20px;
  }
  p {
    width: 100%;
    margin-top: 13px;
    margin-bottom: 50px;
    font-size: 40px;
  }
  @media screen and (max-width: 440px) {
    h2 {
      font-size: 14px;
    }
    p {
      margin-top: 13px;
      margin-bottom: 20px;
      font-size: 20px;
    }
  }
`;

const Credits = styled.div.attrs((props) => ({
  style: {
    display: props.creditLight ? "block" : "none",
  },
}))`
  /* width: 125px; */
  text-align: center;
  padding: 0;
  align-items: center;
  justify-content: center;
  /* display: ${(props) => (props.creditLight ? "block" : "none")}; */

  p {
    /* width: 150px; */
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
    /* transform: translateX(-40px); */
  }
  @media screen and (max-width: 440px) {
    width: 100%;
    /* padding: 0 2px; */
    p {
      /* width: 100px; */
      font-size: 10px;
      margin-bottom: 10px;
      text-align: center;
    }
  }
`;

const Person = styled.div`
  width: 35px;
  height: 35px;
  margin: 5px auto;
  overflow: hidden;
  border-radius: 50%;

  @media screen and (min-width: 441px) {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
`;

const Poster = styled.div`
  /* width: 380px;
  height: 543px; */
  width: 312px;
  height: 449px;
  /* margin: 0 30px; */
  /* background-color: salmon; */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  cursor: pointer;

  img {
    width: 110%;
    &:hover {
      transform: scale(1.05);
      transition: 0.5s;
    }
  }
  @media screen and (max-width: 1400px) {
    width: 250px;
    height: 370px;
  }

  @media screen and (max-width: 1200px) {
    width: 250px;
    height: 370px;
  }
  @media screen and (max-width: 440px) {
    /* align-items: start; */
    width: 50%;
    height: 250px;
    padding: 5%;
    img {
      width: 100%;
      &:hover {
        transform: scale(1);
        transition: 0s;
      }
    }
  }
`;

const ShowWrap = styled.div`
  width: 100%;
  position: absolute;
  bottom: 100px;
  left: 0%;
  z-index: 990;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 440px) {
    width: 100%;
    position: absolute;
    bottom: 18%;
    left: 0%;
    z-index: 990;
    margin-top: 10px;
  }
`;

const Show = styled.button`
  all: unset;
  width: 100px;
  height: 60px;
  background-color: white;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 600;
  color: #1d1d1d;
  text-align: center;
  margin: 0 50px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 15px white;
    color: black;
  }
  @media screen and (max-width: 440px) {
    width: 50px;
    height: 50px;
    font-size: 12px;
    margin: 0 30px;
    &:hover {
      box-shadow: 0px 0px 0px white;
      color: black;
    }
  }
`;

// 로컬 스토리지 함수
const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const loadFromLocalStorage = (key) => {
  const savedData = localStorage.getItem(key);
  return savedData ? JSON.parse(savedData) : null;
};

const Ground = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([null, null]);
  const [firstcredit, setFirstcredit] = useState();
  const [secondcredit, setSecondcredit] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [remainingMovies, setRemainingMovies] = useState(
    loadFromLocalStorage("remainingMovies") || moviedatas
  );
  const [currentMovies, setCurrentMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState(
    loadFromLocalStorage("selectedMovies") || []
  );

  const [round, setRound] = useState(
    loadFromLocalStorage("round") || { totalRounds: 16, current: 1 }
  );

  const [scoreLight, setScoreLight] = useState(false);
  const [creditLight, setCreditLight] = useState(false);

  // 선택된 영화 핸들링
  const handleMovieSelect = (selectedMovie) => {
    // 현재 대진 중인 두 영화의 ID를 가져옴
    const [firstMovie, secondMovie] = currentMovies;

    // remainingMovies에서 선택되지 않은 영화도 제거하여 다음 라운드에 포함되지 않도록 함
    const updatedMovies = remainingMovies.filter(
      (movie) => movie.id !== firstMovie.id && movie.id !== secondMovie.id
    );

    // 선택된 영화만 selectedMovies에 추가
    const updatedSelectedMovies = [...selectedMovies, selectedMovie];

    setRemainingMovies(updatedMovies);
    setSelectedMovies(updatedSelectedMovies);

    setScoreLight(false);
    setCreditLight(false);

    // 로컬 스토리지에 업데이트된 상태 저장
    saveToLocalStorage("대기중인 영화", updatedMovies);
    saveToLocalStorage("내가 선택한 영화", updatedSelectedMovies);

    // 다음 라운드 설정
    if (updatedMovies.length >= 2) {
      setCurrentMovies(RandomMovies(updatedMovies));
      setRound((prev) => {
        const newRound = { ...prev, current: prev.current + 1 };
        saveToLocalStorage("round", newRound);
        return newRound;
      });
    } else if (updatedSelectedMovies.length === 1) {
      // 결승전 우승 영화가 선택된 경우 우승 영화 페이지로 이동
      navigate(`/Ending/${selectedMovie.id}`);
    } else if (updatedSelectedMovies.length >= 2) {
      // 다음 라운드로 전환
      const newRoundTotal = updatedSelectedMovies.length / 2;
      setRemainingMovies(updatedSelectedMovies);
      setSelectedMovies([]); // 초기화
      setRound({ totalRounds: newRoundTotal, current: 1 });

      // 로컬 스토리지 업데이트
      saveToLocalStorage("remainingMovies", updatedSelectedMovies);
      saveToLocalStorage("selectedMovies", []); // 로컬 스토리지에서도 초기화
      saveToLocalStorage("round", { totalRounds: newRoundTotal, current: 1 });
    }
  };

  // 랜덤으로 영화 두 개 선택
  const RandomMovies = (movies) => {
    if (movies.length < 2) return [];
    const mix = [...movies].sort(() => 0.5 - Math.random());
    return [mix[0], mix[1]];
  };

  // remainingMovies가 초기화되었을 때 새 라운드를 위해 currentMovies 설정
  useEffect(() => {
    if (selectedMovies.length === 0 && remainingMovies.length >= 2) {
      setCurrentMovies(RandomMovies(remainingMovies));
    }
  }, [remainingMovies, selectedMovies]);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const movieData1 = await movieDetail(currentMovies[0]?.id);
        const movieData2 = await movieDetail(currentMovies[1]?.id);
        const moviePerson1 = await movieCredits(currentMovies[0]?.id);
        const moviePerson2 = await movieCredits(currentMovies[1]?.id);
        setFirstcredit(moviePerson1);
        setSecondcredit(moviePerson2);
        setData([movieData1, movieData2]);
        // console.log(moviePerson);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (currentMovies.length === 2) fetchMovies();
  }, [currentMovies]);

  const displayRoundTitle = () => {
    if (round.totalRounds === 1) return "결승전";
    return `${round.totalRounds * 2}강 ${round.current}/${round.totalRounds}`;
  };

  const toggleScore = () => setScoreLight(!scoreLight);
  const toggleCredit = () => setCreditLight(!creditLight);

  const handleReset = () => {
    // remainingMovies 배열을 랜덤하게 섞기
    const shuffledMovies = [...remainingMovies].sort(() => Math.random() - 0.5);

    // 상태 업데이트: 섞인 영화로 remainingMovies를 설정하고 현재 라운드 재설정
    setRemainingMovies(shuffledMovies);
    setCurrentMovies(RandomMovies(shuffledMovies)); // 첫 대진 두 영화를 랜덤하게 설정
    setScoreLight(false); // 평점과 출연진 초기화
    setCreditLight(false);

    // 로컬 스토리지에도 업데이트된 상태를 저장
    saveToLocalStorage("remainingMovies", shuffledMovies);
    saveToLocalStorage("currentMovies", RandomMovies(shuffledMovies));
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Bg_1></Bg_1>
          <Bg_2></Bg_2>
          <Title>
            <h4>{displayRoundTitle()}</h4>
          </Title>
          <Container>
            <Main>
              <Mo_1>
                <HintWrap_1>
                  <Score scoreLight={scoreLight}>
                    <h2>평점</h2>
                    <p>{data[0].vote_average}</p>
                  </Score>
                  <Credits creditLight={creditLight}>
                    <Person>
                      <img
                        src={W500_URL + firstcredit.cast[0].profile_path}
                        alt={firstcredit.cast[0].name}
                      />
                    </Person>
                    <p>{firstcredit.cast[0].name}</p>
                    <Person>
                      <img
                        src={W500_URL + firstcredit.cast[1].profile_path}
                        alt={firstcredit.cast[1].name}
                      />
                    </Person>
                    <p>{firstcredit.cast[1].name}</p>
                    <Person>
                      <img
                        src={W500_URL + firstcredit.cast[2].profile_path}
                        alt={firstcredit.cast[2].name}
                      />
                    </Person>
                    <p>{firstcredit.cast[2].name}</p>
                  </Credits>
                </HintWrap_1>
                <Poster onClick={() => handleMovieSelect(currentMovies[0])}>
                  <img
                    src={W500_URL + data[0].poster_path}
                    alt={data[0].title}
                  />
                </Poster>
              </Mo_1>

              <h5>vs</h5>
              <Mo_2>
                <Poster onClick={() => handleMovieSelect(currentMovies[1])}>
                  <img
                    src={W500_URL + data[1].poster_path}
                    alt={data[1].title}
                  />
                </Poster>
                <HintWrap_2>
                  <Score scoreLight={scoreLight}>
                    <h2>평점</h2>
                    <p>{data[1].vote_average}</p>
                  </Score>
                  <Credits creditLight={creditLight}>
                    <Person>
                      <img
                        src={W500_URL + secondcredit.cast[0].profile_path}
                        alt={secondcredit.cast[0].name}
                      />
                    </Person>
                    <p>{secondcredit.cast[0].name}</p>
                    <Person>
                      <img
                        src={W500_URL + secondcredit.cast[1].profile_path}
                        alt={secondcredit.cast[1].name}
                      />
                    </Person>
                    <p>{secondcredit.cast[1].name}</p>
                    <Person>
                      <img
                        src={W500_URL + secondcredit.cast[2].profile_path}
                        alt={secondcredit.cast[2].name}
                      />
                    </Person>
                    <p>{secondcredit.cast[2].name}</p>
                  </Credits>
                </HintWrap_2>
              </Mo_2>
            </Main>
          </Container>
          <ShowWrap>
            <Show onClick={toggleScore}>평점</Show>
            <Show onClick={toggleCredit}>출연진</Show>
            <Show onClick={handleReset}>리셋</Show>
          </ShowWrap>
        </>
      )}
    </>
  );
};

export default Ground;
