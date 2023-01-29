import getAllMovies from "../controllers/movieController";

const movieRouter = Express.Router();

movieRouter.get("/movies", getAllMovies);

export default movieRouter;
