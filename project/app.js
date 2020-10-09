require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');
const userRouter = require("./api/users/user.router");

app.use(cors());  
// convert json to javascript object
app.use(express.json());
// defining route
app.use("/api/users", userRouter);
app.listen(process.env.APP_PORT,()=>{
    console.log("server is up and running : ", process.env.APP_PORT);
});