import express from "express";
import cors from "cors"
import {studentRouter} from "./Routes/student.js"
import dotenv from "dotenv"


//initializing express server
const app = express();

//enviromental configuration
dotenv.config();

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors())

// application routes 
app.use("/students", studentRouter);
app.use("/users", studentRouter);
//start the server
app.listen(PORT, () => console.log(`Server started in localhost:${PORT}`));