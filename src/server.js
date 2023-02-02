import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import connectToMongo from "./config/mongo.js";
import userRouter from "./routes/userRouter.js";
import movieRouter from "./routes/movieRouter.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";

dotenv.config();

connectToMongo();

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/regular", express.static("public/storage/regular"));
app.use("/trending", express.static("public/storage/trending"));

app.use("/api", cors(), movieRouter);
app.use("/api", cors(), userRouter);
app.use("/", cors(), ...swaggerMiddleware());

app.listen(process.env.PORT || 5000);
