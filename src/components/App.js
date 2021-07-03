import Header from "./Header";
import Body from "./Body";
import { useState } from "react";
const App = () => {
  const [movies, setMovies] = useState({
    title: "Most Recent Movies",
    data: null,
  });
  const [actualize, setAcatualize] = useState(0);
  return (
    <div>
      <Header
        setMovies={setMovies}
        actualize={actualize}
        setAcatualize={setAcatualize}
      />
      <Body movies={movies} setMovies={setMovies} actualize={actualize} />
    </div>
  );
};

export default App;
