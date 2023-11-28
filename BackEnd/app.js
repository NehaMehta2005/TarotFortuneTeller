// import stuff you need
import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import usersRouter from "./routers/usersRouter.js";
// creating express server
const app = express();

// middleware
// middleware to parse any incoming json data
app.use(express.json());

// connect to MongoDB through mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/TarotFortuneTeller")
  .then(() => console.log("We connected to DB 😉"))
  .catch((err) => console.log(err));

// middleware morgan
app.use(morgan("tiny"));

// cors middleware
app.use(cors({origin:"http://localhost:5173",exposedHeaders:["token"]}))


// localhost:8000/api/users
app.use("/users", usersRouter);
//app.use("/terms", footerRouter);
//create more routes as required


// middleware to handle errors
app.use((error, req, res, next) => {
  res.status(error.status || 500).send(error.message || "something went wrong");
});


// the server should listen on port 5500
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("the server is running on port 🎉", PORT);
});
