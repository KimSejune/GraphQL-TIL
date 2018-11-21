import { getMovies, getById, addMovie, deleteMovie } from "./db";

// resolvers는 함수로 구현한다.
const resolvers = {
  Query: {
      movies: () => getMovies(),
      movie: (_, { id }) => getById(id)
  },
  Mutation: {
    addMovie: (_, {name, score}) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
};

export default resolvers;