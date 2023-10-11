import  productModel  from "../models/productModel.js";
// Fonction pour créer un nouveau produit

export const createProduct = async (req, res) => {
    try {
      const { title, description, price, img } = req.body;
  
      const product = new productModel({
        title,
        description,
        price,
        img,
      });
  
      const savedProduct = await product.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      console.error("Erreur lors de la création du produit :", error);
      res.status(500).json({ error: "Erreur lors de la création du produit" });
    }
  };
  
  // Fonction pour récupérer tous les produits
  export const getAllProducts = async (req, res) => {
    try {
      const products = await productModel.find();
      res.status(200).json(products);
    } catch (error) {
      console.error("Erreur lors de la récupération des produits :", error);
      res.status(500).json({ error: "Erreur lors de la récupération des produits" });
    }
  };