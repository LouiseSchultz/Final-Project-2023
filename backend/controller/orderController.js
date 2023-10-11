import orderModel from "../models/orderModels.js";


// Fonction pour créer une nouvelle commande
export const createOrder = async (req, res) => {
    try {
      const { user, products, amount, address } = req.body;
  
      const order = new orderModel({
        user,
        products,
        amount,
        address,
      });
  
      const savedOrder = await order.save();
      res.status(201).json(savedOrder);
    } catch (error) {
      console.error("Erreur lors de la création de la commande :", error);
      res.status(500).json({ error: "Erreur lors de la création de la commande" });
    }
  };
  
  // Fonction pour récupérer toutes les commandes d'un utilisateur
  export const getUserOrders = async (req, res) => {
    try {
      const userId = req.params.userId; // Vous devez avoir une route avec un paramètre userId
      const orders = await orderModel.find({ user: userId });
      res.status(200).json(orders);
    } catch (error) {
      console.error("Erreur lors de la récupération des commandes de l'utilisateur :", error);
      res.status(500).json({ error: "Erreur lors de la récupération des commandes de l'utilisateur" });
    }
  };