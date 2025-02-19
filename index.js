import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
 const app = express();
 app.use(express.json());
//  app.use (cors());

 const EMPLOYEES = [
    {id:1, name: "yash", age: 23, salary:50000},
    {id:2, name: "ritesh", age: 23, salary:100000},
    {id:3, name: "raj", age: 23, salary:30000},
    {id:4, name: "mohit", age: 23, salary:20000},
 ]

 app.get('/health',(req,res)=>{
    res.status(200).json({
      success:true,
      message:"server is running"  
    })
 })

 app.get ('/employees',(req,res)=>{
     res.status(200).json({
         success:true,
         message:"employees data",
         data:EMPLOYEES
     })
 })

 app.post('/employees',(req,res)=>{
    const {name, age, salary}= req.params;

    if(!id){
        return res.status(400).json({
            success:false,
            message:"id is required"
        })
    }

    if(!name){
        return res.status(400).json({
            success:false,
            message:"name is required"
        })
    }

    if(!age){
        return res.json({
            success:false,
            message:"age is required"
        })
    }

    if(!salary){
        return res.json({
            success:false,
            message:"salary is required"
        })
    }
 })

 app.get ('*', (req,res)=>{
    res.status(404).json({
        success:false,
        message:"page not found"
    })
 })

 const PORT = 5003;

  app.listen(PORT,()=>{
    console.log(`aerver is running on ${PORT}`)
  })