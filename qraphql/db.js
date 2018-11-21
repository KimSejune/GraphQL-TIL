let movies = [
  {
    id: 0,
    name: "해리포터",
    score: 99
  },
  {
    id: 1,
    name: "어벤져스",
    score: 4
  },
  {
    id: 2,
    name: "목격자",
    score: 8
  },
  {
    id: 3,
    name: "웜바디스",
    score: 100
  }
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length,
    name, 
    score
  };
  movies.push(newMovie)
  return newMovie
}

export const deleteMovie = (id) => {
  const deletedMovies = movies.filter(movie => movie.id != id);
  if(movies.length > deletedMovies.length) {
    movies = deletedMovies;
    return true;
  } else {
    return false;
  }
};
