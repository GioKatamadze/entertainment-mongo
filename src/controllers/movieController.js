import Movie from "../models/moviesModel.js";

const getAllMovies = async (_, res) => {
  const data = await Movie.find();
  const newData = data.map((movie) => {
    return {
      movie_id: movie.movie_id,
      title: movie.title,
      thumbnail: movie.thumbnail,
      year: movie.year,
      category: movie.category,
      rating: movie.rating,
      isbookmarked: movie.isbookmarked,
      istrending: movie.istrending,
    };
  });
  return res.json(newData);
};

export default getAllMovies;
