const express = require("express");
const connectDB = require ("./db");
const dotenv = require("dotenv").config();
const cors = require("cors");
const cookieParser = require ("cookie-parser");

connectDB();

const app = express();

app.use(cors());
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());


app.use("/v2/job-application/company", require("./Routes/company.Routes"));



app.listen (port, ()=>{
    console.log(`Server is running on port ${port}`);
});