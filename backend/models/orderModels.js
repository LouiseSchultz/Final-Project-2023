import mongoose from "mongoose";
const {Schema} = mongoose

const orderSchema = new Schema({
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user", // Remplacez par le nom de votre modèle d'utilisateur
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // Remplacez par le nom de votre modèle de produit
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  amount: {
    type: Number,
    required: true,
  },
  address: {
    name: String,
    strasse: String,
    ort: String,
    postleitzahl: String,
    telephone: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const orderModel = mongoose.model('oder', orderSchema)
export default orderModel