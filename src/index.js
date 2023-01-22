import {dirname, join} from 'path'
import { fileURLToPath } from 'url';

import express from 'express';
import dotenv from 'dotenv'
import helmet from 'helmet';
 

import { bootCampRoutes } from './routes/bootcamps.js';



dotenv.config({
    path:'./config/services.env'
})
 
const __dirname = dirname(fileURLToPath(import.meta.url));;
console.log(join(__dirname, 'public'))
const app = express();
app.use(helmet)
app.use(express.static(join(__dirname, 'public')))
app.use('/api/v1/bootcamps', bootCampRoutes("pass in props"))

 app.get('/', async(req, res, next)=>{
   return  res.sendFile('index.html')
})
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
 
// setup ejs templates

// setup post request


 


app.listen(process.env.PORT, async(req, res, next)=>{
    console.log(`Server Running http://localhost:3000`)
})