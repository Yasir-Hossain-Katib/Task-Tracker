const express=require('express');
const connectDB=require("./dbconfig.js");
require("dotenv").config();
const taskRoutes = require("./routes/taskRoutes")
const cors= require("cors");


const app=express();
const PORT= process.env.PORT|| 5000;

app.use(express.json());
app.use(cors());
app.use(cors({ origin: 'http://localhost:5173' }));

connectDB();

app.use("/api",taskRoutes);



app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})