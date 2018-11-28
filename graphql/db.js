import axios from "axios";

const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

// export const getMovies = (limit, rating) => {
//   return fetch(`${API_URL}`)
//     .then(res => res.json())
//     .then(json => json.data.movies);
// }

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: {
        movies
      }
    }
  } = await axios.get(LIST_MOVIES_URL, {
    params: {
      limit: limit,
      minimum_rating: rating
    }
  });
  return movies
}

export const getMovieById = async (id) => {
  const {
    data: {
      data: {
        movie
      }
    }
  } = await axios.get(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  })
  return movie
}

export const getSuggestions = async (id) => {
  const {
    data: {
      data : { movies }
    }
  } = await axios.get(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  })
  return movies
}

export const addMovie = async (limit, title, rating, summary, language, medium_cover_image, url) => {
  let movies = await getMovies(limit)
  
  const newMovie = {
    id: 1111111111,
    title,
    rating,
    summary,
    language,
    medium_cover_image,
    url
  }
  
  // movies = {...movies, ...newMovie}
  movies[limit] = newMovie
  return movies
}
