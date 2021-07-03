import axios from "axios";

const getRecentMovies = async () => {
  const baseUrl = process.env.REACT_APP_API_DOMAIN;
  const apiKey = process.env.REACT_APP_MOVIE_DB_API_KEY;
  let response;
  await axios
    .get(`${baseUrl}/discover/movie?api_key=${apiKey}`)
    .then((res) => {
      console.log(res.data);
      response = {
        res: true,
        data: res.data,
      };
    })
    .catch((err) => {
      console.log(err.response);
      response = {
        res: false,
        data: err.response && err.response.data.status_message,
      };
    });
  return response;
};
const searchMovie = async (query) => {
  const baseUrl = process.env.REACT_APP_API_DOMAIN;
  const apiKey = process.env.REACT_APP_MOVIE_DB_API_KEY;
  let response;
  await axios
    .get(`${baseUrl}/search/movie?api_key=${apiKey}&&query=${query}`)
    .then((res) => {
      console.log(res.data);
      response = {
        res: true,
        data: res.data,
      };
    })
    .catch((err) => {
      console.log(err.response);
      response = {
        res: false,
        data: err.response && err.response.data.status_message,
      };
    });
  return response;
};
export { getRecentMovies, searchMovie };
