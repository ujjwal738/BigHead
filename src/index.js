import dotenv from "dotenv";
import app from "./app.js"
import connectDB from "./db/index.js";


// app config env

dotenv.config({
  path: "./.env",
});



// default port
const PORT = process.env.PORT || 3001;



//APP RUUNING CODE ON THE PORT NUMBER ONLY WHEN DATABASE GETS CONNECTED
connectDB()  // method imported from the ./db/index.js file
  .then(() => {
    app.listen(PORT, ()=>{
  console.log(`App is running on PORT ${PORT}`);
  })
  })
  .catch((err) => {
    console.log("MongoDB connection Erorr", err)
  })


