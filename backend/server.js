import express from "express";
import cors from 'cors'
import 'dotenv/config'
import { connectMongoose } from "./util/connectMongoose.js"
import { bookRouter } from "./router/bookRouter.js";
import userRouter from "./router/userRouter.js";
import cookieParser from 'cookie-parser'

const PORT = process.env.PORT || 6000

const app = express()
const connected = await connectMongoose()

app.use(cors())

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

app.use(bookRouter)
app.use(userRouter)




if(connected){
    app.listen(PORT, () => {
        console.log(`app listening on port ${PORT}`);
    })
} else {
    console.error("Verbindung zu mongodb nicht möglich.")
}



