import { getMovies, getMovieById, getSuggestions, addMovie } from "./db";

// resolvers는 함수로 구현한다.
const resolvers = {
  Query: {
      movies: (_, { limit, rating }) => getMovies(limit, rating),
      getMovie: (_, { movie_id }) => getMovieById(movie_id),
      getSuggest: (_, { movie_id }) => getSuggestions(movie_id)
  },
  Mutation: {
      addMovie: (_, { limit, title, rating, summary, language, medium_cover_image, url}) => 
                addMovie(limit, title, rating, summary, language, medium_cover_image, url)
  }
};

export default resolvers;