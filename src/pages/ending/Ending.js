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

// const [remainingMovies, setRemainingMovies] = useState(savedMovies);
// const [currentPair, setCurrentPair] = useState([]);
// const [round, setRound] = useState(savedRound);

// const saveMovies = JSON.parse(localStorage.getItem("remainMovies")) || [
//   ...moviedatas,
// ];
// const saveRound = parseInt(localStorage.getItem("round")) || 32;

// const selectRandomPair = () => {
//   if (remainingMovies.length < 2) return;

//   const firstIndex = Math.floor(Math.random() * remainingMovies.length);
//   let secondIndex;

//   do {
//     secondIndex = Math.floor(Math.random() * remainingMovies.length);
//   } while (secondIndex === firstIndex);
// };

// setCurrentPair([remainingMovies[firstIndex], remainingMovies[secondIndex]]);

// useEffect(() => {
//   localStorage.setItem("remainMovies", JSON.stringify(remainingMovies));
//   localStorage.setItem("round", round.toString());
// }, [remainingMovies, round]);

// const Clickhandler = (selectedMovie) => {
//   const newRemainMovies = remainingMovies.filter(
//     (movie) => movie.id === selectedMovie.id
//   );
// };

// setRemainingMovies(newRemainMovies);

// if (newRemainMovies.length <= round / 2) {
//   setRound(round / 2);
// }
