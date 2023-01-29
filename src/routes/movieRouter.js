import getAllMovies from "../controllers/movieController.js";
import Express from "express";

const movieRouter = Express.Router();

movieRouter.get("/movies", getAllMovies);

export default movieRouter;
