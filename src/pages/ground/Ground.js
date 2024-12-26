import styled from "styled-components";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { movieCredits, movieDetail } from "../../api";
import Loading from "../../components/Loading";
import { W500_URL } from "../../lib/imgUrl";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-bottom: 50px;

  @media screen and (max-width: 440px) {
    width: 100%;
    height: 650px;
    flex-direction: column;
    padding-bottom: 0;
  }
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  transform: translateY(30px);

  h4 {
    font-size: 30px;
    color: white;
    margin-bottom: 10px;
  }

  .progress-bar {
    width: 30%;
    height: 10px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;

    .progress {
      height: 100%;
      background-color: #4caf50;
      transition: width 0.3s ease-in-out;

      width: ${(props) => props.progress || 0}%;
    }
  }

  @media screen and (max-width: 440px) {
    h4 {
      font-size: 20px;
    }
    .progress-bar {
      width: 90%;
      margin-bottom: 20px;
    }
  }
`;

const Main = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  justify-content: space-between;

  h5 {
    transform: translateY(-10%);
    font-size: 50px;
    color: crimson;
    font-weight: 600;
    text-align: center;
    line-height: 60px;
  }

  @media screen and (min-width: 441px) {
    position: unset;
    max-width: 1785px;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 0 75px;
    margin: 0 auto;
    p {
      width: 100px;
      font-size: 30px;
      font-weight: 900;
      text-align: center;
    }
    h5 {
      width: 50px;
      height: auto;
      font-size: 30px;
      font-weight: 600;
      text-align: center;
      transform: translateY(-160%);
    }
  }
`;

const Mo1 = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  justify-content: end;
  /* flex-direction: column; */
  /* padding: 0 7% 0 0; */
  /* border-top: 1px solid white; */
  /* border-bottom: 1px solid white; */

  @media screen and (min-width: 441px) {
    position: unset;
    width: 500px;
    height: 85%;
    padding: 0 3%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: none;
    border-bottom: none;
  }

  @media screen and (min-width: 1400px) {
  }
`;

const Mo2 = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  /* border-top: 1px solid white; */
  /* border-bottom: 1px solid white; */
  justify-content: start;
  /* padding: 0 0 0 7%; */
  @media screen and (min-width: 441px) {
    position: unset;
    width: 500px;
    height: 85%;
    padding: 0 3%;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: none;
    border-bottom: none;
  }
  @media screen and (min-width: 1400px) {
  }
`;

const HintWrap1 = styled.div`
  height: 250px;
  width: 50%;
  /* width: 200px; */
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (min-width: 441px) {
    margin: 0 10px;
    /* height: 21%; */
    width: 100%;
    flex-direction: column;
  }
`;
const HintWrap2 = styled.div`
  height: 250px;
  /* width: 200px; */
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (min-width: 441px) {
    margin: 0 10px;
    width: 100%;
    flex-direction: column;
    /* height: 21%; */
  }
`;

const Score = styled.div`
  text-align: center;
  /* display: ${(props) => (props.$scoreLight ? "block" : "none")}; */
  display: block;
  h2 {
    font-size: 20px;
  }
  p {
    width: 100%;
    /* margin-top: 13px; */
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 300;
  }

  svg {
    color: yellow;
    font-size: 18px;
    vertical-align: 0.1em;
  }
  @media screen and (max-width: 440px) {
    width: 100%;
    display: flex;
    align-items: center;
    h2 {
      font-size: 14px;
      color: white;
    }
    p {
      margin-top: 13px;
      margin-bottom: 5px;
      font-size: 16px;
      color: white;

      svg {
        color: #fdcc0d;
      }
    }
  }
`;

const Credits = styled.div`
  text-align: center;
  padding: 0;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.$creditLight ? "flex" : "none")};
  flex-direction: row;
  p {
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 440px) {
    width: 100%;
    flex-direction: column;

    p {
      font-size: 10px;
      /* margin-bottom: 10px; */
      color: white;
      text-align: center;
    }
  }
`;

const Name = styled.div`
  text-align: center;
  padding: 0;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.$creditLight ? "flex" : "none")};
  flex-direction: row;
  p {
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 440px) {
    width: 100%;
    flex-direction: column;

    p {
      height: 63px;
      font-size: 10px;
      color: white;
      text-align: center;
      margin-bottom: 0;
      line-height: 63px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Person = styled.div`
  width: 50px;
  height: 50px;
  margin: 10px auto;
  overflow: hidden;
  border-radius: 50%;

  img {
    width: 100%;
  }

  @media screen and (min-width: 441px) {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
`;

const Poster = styled.div`
  width: 312px;
  /* height: 350px; */
  min-height: 500px;
  height: 70%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  cursor: pointer;

  img {
    width: 110%;
    /* height: 100%; */
    &:hover {
      transform: scale(1.05);
      transition: 0.5s;
    }
  }
  @media screen and (max-width: 1400px) {
    /* width: 250px; */
    /* height: 370px; */
  }

  @media screen and (max-width: 1200px) {
    width: 250px;
    /* height: 370px; */
  }
  @media screen and (max-width: 440px) {
    width: 50%;
    min-height: 250px;
    height: 100%;
    /* padding: 5%; */
    img {
      width: 80%;
      &:hover {
        transform: scale(1);
        transition: 0s;
      }
    }
  }
`;

const ShowWrap = styled.div`
  width: 100%;
  /* margin-top: 10px; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 440px) {
    /* margin-top: 50px; */
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

  const calculateProgress = () => {
    const total = round.totalRounds * 2; // 총 영화 수
    const completed = (round.current - 1) * 2; // 완료된 경기 수
    return Math.round((completed / total) * 100); // 퍼센트 계산
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle title={"경기장"}></PageTitle>

          <Header />

          <Title progress={calculateProgress()}>
            <h4>{`${round.totalRounds * 2}강`}</h4>
            <div className="progress-bar">
              <div className="progress" />
            </div>
          </Title>
          <Container>
            <Main>
              <Mo1>
                <Poster onClick={() => handleMovieSelect(currentMovies[0])}>
                  <img
                    src={W500_URL + data[0].poster_path}
                    alt={data[0].title}
                  />
                </Poster>
                <HintWrap1>
                  <Score $scoreLight={scoreLight}>
                    <p>
                      <FontAwesomeIcon icon={faStar} />
                      {Math.round(data[0].vote_average)}점
                    </p>
                  </Score>
                  <Credits $creditLight={creditLight}>
                    <Person>
                      <img
                        src={W500_URL + firstcredit.cast[0].profile_path}
                        alt={firstcredit.cast[0].name}
                      />
                    </Person>
                    <Person>
                      <img
                        src={W500_URL + firstcredit.cast[1].profile_path}
                        alt={firstcredit.cast[1].name}
                      />
                    </Person>
                    <Person>
                      <img
                        src={W500_URL + firstcredit.cast[2].profile_path}
                        alt={firstcredit.cast[2].name}
                      />
                    </Person>
                  </Credits>
                  <Name $creditLight={creditLight}>
                    <p>{firstcredit.cast[0].name}</p>
                    <p>{firstcredit.cast[1].name}</p>
                    <p>{firstcredit.cast[2].name}</p>
                  </Name>
                </HintWrap1>
              </Mo1>

              <h5>vs</h5>
              <Mo2>
                <Poster onClick={() => handleMovieSelect(currentMovies[1])}>
                  <img
                    src={W500_URL + data[1].poster_path}
                    alt={data[1].title}
                  />
                </Poster>
                <HintWrap2>
                  <Score $scoreLight={scoreLight}>
                    <p>
                      {" "}
                      <FontAwesomeIcon icon={faStar} />
                      {Math.round(data[1].vote_average)}점
                    </p>
                  </Score>
                  <Credits $creditLight={creditLight}>
                    <Person>
                      <img
                        src={W500_URL + secondcredit.cast[0].profile_path}
                        alt={secondcredit.cast[0].name}
                      />
                    </Person>
                    <Person>
                      <img
                        src={W500_URL + secondcredit.cast[1].profile_path}
                        alt={secondcredit.cast[1].name}
                      />
                    </Person>
                    <Person>
                      <img
                        src={W500_URL + secondcredit.cast[2].profile_path}
                        alt={secondcredit.cast[2].name}
                      />
                    </Person>
                  </Credits>
                  <Name $creditLight={creditLight}>
                    <p>{secondcredit.cast[0].name}</p>
                    <p>{secondcredit.cast[1].name}</p>
                    <p>{secondcredit.cast[2].name}</p>
                  </Name>
                </HintWrap2>
              </Mo2>
            </Main>
            <ShowWrap>
              {/* <Show onClick={toggleScore}>평점</Show> */}
              <Show onClick={toggleCredit}>출연진</Show>
              <Show onClick={handleReset}>리셋</Show>
            </ShowWrap>
          </Container>
        </>
      )}
    </>
  );
};

export default Ground;
