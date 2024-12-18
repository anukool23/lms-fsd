import express , {Express, Request, Response} from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "./config";
require("dotenv").config();

const PORT = config.server.port;

const app:Express = express()

app.use(express.json());
app.use(cors());

(async function startUp(){
try{
    await mongoose.connect(config.mongo.url,{w:"majority", retryWrites:true, authMechanism:"DEFAULT"});
    console.log("Connected to DB");

    app.get("/health",(req:Request, res:Response)=>{
        res.status(200).json({
            "message":"Server is healthy"
        })
    })
    
    app.listen((PORT),()=>{
        console.log(`Server is running on port ${PORT}`)
    })

}catch(err){
    console.log("Unable to connect to DB",err)
}
})();



