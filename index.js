import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import collectionDB  from './Database/config.js';
import student from './Routers/student.router.js'
import  stumentor from './Routers/mentor.router.js'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT

app.use('/api',student)
app.use('/apiMentor',stumentor)
app.get('/',(req, res) => {
  res.status(200).send("API is working");
});
collectionDB()
app.listen(port,()=>{
console.log("App is running on the port",port)
})