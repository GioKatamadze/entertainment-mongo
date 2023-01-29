import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import connectToMongo from "./config/mongo.js";
import userRoutes from "./routes/userRoutes.js";
import movieRouter from "./routes/movieRouter.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const __dirname = path.resolve();

dotenv.config();

if (process.env.NODE_ENV === undefined) {
  dotenv.config({ path: "../.env" });
}

connectToMongo();

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/images", express.static("public/storage"));
app.use("/api", movieRouter);
app.use("/api/user", userRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
}

app.use(notFound);
app.use(errorHandler);
app.use("/", cors(), ...swaggerMiddleware());

app.listen(process.env.PORT || 5000);
