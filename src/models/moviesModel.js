import mongoose from "mongoose";

const { Schema } = mongoose;

const movieSchema = new Schema({
  movie_id: {
    type: Schema.Types.Number,
    required: true,
  },
  title: {
    type: Schema.Types.String,
    required: true,
  },
  thumbnail: {
    type: Schema.Types.String,
    required: true,
  },
  year: {
    type: Schema.Types.Number,
    required: true,
  },
  category: {
    type: Schema.Types.String,
    required: true,
  },
  rating: {
    type: Schema.Types.String,
    required: true,
  },
  isbookmarked: {
    type: Schema.Types.Boolean,
    required: true,
  },
  istrending: {
    type: Schema.Types.Boolean,
    required: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
