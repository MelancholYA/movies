import { getRecentMovies } from "../utils/movieFuncs";
import { useEffect, useState } from "react";
import NoPoster from "../images/no-poster.png";
import MovieDetails from "./MovieDetails";
const Body = ({ movies, setMovies, actualize }) => {
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(true);
  const [movieDetails, setMovieDetails] = useState({
    show: false,
    data: null,
  });

  useEffect(() => {
    const getData = async () => {
      setLoader(true);
      await getRecentMovies().then((res) => {
        res.res
          ? setMovies({
              title: "Most Recent Movies",
              data: res.data,
            })
          : setError(res.data);
      });
      setLoader(false);
    };
    getData();
  }, [actualize]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='body'>
      {movieDetails.show && (
        <MovieDetails data={movieDetails.data} setIsShown={setMovieDetails} />
      )}
      {error && (
        <div className='error' onClick={() => setError(null)}>
          {error}
        </div>
      )}
      <h3 className='body__title'>{movies && movies.title}</h3>
      <div className='body__movies'>
        {loader ? (
          <div className='loading'>Loading</div>
        ) : error ? (
          <div className='non'>No Data</div>
        ) : movies.data ? (
          movies.data.results.length > 0 ? (
            movies.data.results.map((movie, i) => (
              <div
                key={i}
                className='body__movies__movie'
                name={movie.title}
                rating={movie.vote_average}
                onClick={() => setMovieDetails({ show: true, data: movie })}
                style={{
                  backgroundImage: movie.poster_path
                    ? `url(https://image.tmdb.org/t/p/original${movie.poster_path})`
                    : `url(${NoPoster})`,
                }}
              ></div>
            ))
          ) : (
            <div className='non'>No Data</div>
          )
        ) : (
          <div className='non'>No Data</div>
        )}
      </div>
    </div>
  );
};

export default Body;
