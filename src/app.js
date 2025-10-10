//this is the app.js file that gets imported to the entry point file that is index.js file
import express from "express";
import cors from "cors"
import healthCheckRouter from "./routes/healthcheck.routes.js"

const app = express();

//basic configuration code
app.use(express.json({limit: "16kb"}));  //json payload limit
app.use(express.urlencoded({extended: true, limit: "16kb"})); //extended url sich as "%" that gets added automatically in the url
app.use(express.static("public")) //folder that serves the images and is situated inside the src folder

//CORS  
app.use(cors(
  {origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173", //allowed urls
  credientials: true, 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], //allowed methods
  allowedHeaders: ["Authorization", "Content-Type"], //allowed headers
  }));

//routes code
app.get("/app", (req, res)=> {
  res.send("Welcome To Big Head!!!"),
  console.log("function started"),
  console.log("You can call as many function as you want mate❤️!")
});

// routes code brother
app.use("/api/v1", healthCheckRouter)

export default app;