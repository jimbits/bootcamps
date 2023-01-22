/* 
     @bootCampRouter
     Create a function to call the Routes allows me to pass in additional properties to the route that I may need.


*/

import express from "express"
const router = express.Router();


const bootCampRoutes = (props)=> {
    console.log(props)
    router.get('/', async(req, res, next)=>{
        return  res.status(200).json({message:"get all boot camps"})
     })
     
     
     router.get('/uid/:uid', async(req, res, next)=>{
         const value = (req.params.uid)
        
         return  res.status(200).json({message:`get bootcamp with UID = ${value}`})
      })
      router.post("/", async (req, res, next) => {
        return res.status(200).json({ message: "add a new bootcamp" });
      });
    
      router.put("/uid/:uid", async (req, res, next) => {
        return res.status(200).json({ message: `update the bootcamp using UID = ${req.params.uid}` });
      });
      router.delete("/uid/:uid", async (req, res, next) => {
        return res.status(200).json({ message: `delete the bootcamp using UID = ${req.params.uid}` });
      });
      return router
}

export {bootCampRoutes}