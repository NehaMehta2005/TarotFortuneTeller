// import stuff you need
import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import usersRouter from "./routers/usersRouter.js";
import memberRouter from "./routers/memberRoutes.js";
import contactUsRouter from "./routers/contactUsRoutes.js"
import fortuneTellerRouter from "./routers/fortuneTellerRoutes.js"
import Image from "./models/imageSchema.js";
import fileUpload from "express-fileupload";
import {Readable} from "stream";

// creating express server
const app = express();

// middleware
// middleware to parse any incoming json data
app.use(express.json());
app.use(fileUpload());

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

app.use("/submitContactForm", contactUsRouter);
app.use("/member", memberRouter);
app.use("/yourfortuneteller", fortuneTellerRouter);

//this code to upload images from cliet to server and storing it to database
app.post("/images", async (req,res)=>{
  try {
    const images = req.files.images.map(image =>{
      const img = new Image({
        filename:Date.now()+"_"+image.name,
        data:image.data
      })
      return img.save()
    })
    await Promise.all(images)
    res.send("all good")
    
  } catch (error) {
    
  }
})


//this code is seving images back to client
app.get("/images/:filename",async (req,res)=>{
  try {
    const image = await Image.findOne({filename:req.params.filename})
    if (image){
      const readStream = Readable.from(image.data)
      readStream.pipe(res)
    }
    
  } catch (error) {
    
  }
})

// middleware to handle errors
app.use((error, req, res, next) => {
  res.status(error.status || 500).send(error.message || "something went wrong");
});


// the server should listen on port 5500
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("the server is running on port 🎉", PORT);
});
