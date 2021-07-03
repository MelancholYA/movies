const MovieDetails = ({ data, setIsShown }) => {
  return (
    <div className='movieDetails'>
      <div className='movieDetails__container'>
        <div className='movieDetails__container__header'>
          <h3>{data.title}</h3>
          <button
            onClick={() => setIsShown({ show: false, data: null })}
          ></button>
        </div>
        <div className='movieDetails__container__body'>
          <img
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt=''
            width='250px'
          />
          <div className='movieDetails__container__body__text'>
            <h3>
              Release Date : <span>{data.release_date}</span>{" "}
            </h3>
            <p>{data.overview}</p>
            <p style={{ marginTop: "20px" }}>
              <span style={{ fontWeight: 700 }}>{data.vote_average}</span>
              /10 ({data.vote_count} total vote)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
