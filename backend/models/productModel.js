import mongoose from "mongoose";
const {Schema} = mongoose

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      img: {
        type: [String], // Tableau de chaînes pour stocker les URL des images
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    });

const productModel = mongoose.model('product', productSchema)
export default productModel