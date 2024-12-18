import express , {Express, Request, Response} from "express";
import cors from "cors";
require("dotenv").config();

const PORT = process.env.PORT;

const app:Express = express()

app.use(express.json())
app.use(cors())

app.get("/health",(req:Request, res:Response)=>{
    res.status(200).json({
        "message":"Server is healthy"
    })
})

app.listen((PORT),()=>{
    console.log(`Server is running on port ${PORT}`)
})

