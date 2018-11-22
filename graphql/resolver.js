import { getMovies, getMovieById, getSuggestions } from "./db";

// resolvers는 함수로 구현한다.
const resolvers = {
  Query: {
      movies: (_, { limit, rating }) => getMovies(limit, rating),
      getMovie: (_, { movie_id }) => getMovieById(movie_id),
      getSuggest: (_, { movie_id }) => getSuggestions(movie_id)
  }
};

export default resolvers;