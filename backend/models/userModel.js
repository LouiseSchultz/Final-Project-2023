import mongoose from "mongoose";
const {Schema} = mongoose

const userSchema = new Schema({
  vorName: String,
  nachName: String,
  strasse: String,
  hausNummer: Number,
  postleitzahl: Number,
  ort: String,
  telefon: Number,
  email: {
    type: String,
    unique: true
  },
  password: String
})

const userModel = mongoose.model('user', userSchema)
export default userModel