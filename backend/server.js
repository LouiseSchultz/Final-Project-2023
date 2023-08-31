import express from "express";
import 'dotenv/config'
import { connectMongoose } from "./util/connectMongoose.js"

const PORT = process.env.PORT || 6000

const app = express()
const connected = await connectMongoose()

app.use(express.json())


if(connected){
    app.listen(PORT, () => {
        console.log(`app listening on port ${PORT}`);
    })
} else {
    console.error("Verbindung zu mongodb nicht möglich.")
}



