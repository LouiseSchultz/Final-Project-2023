import express from 'express';

const logoutRouter = express.Router();

// Endpoint pour la déconnexion de l'utilisateur
logoutRouter.post('/api/logout', (req, res) => {
  // Vous pouvez ajouter ici la logique de déconnexion nécessaire
  // Par exemple, supprimer le token d'authentification
  // Assurez-vous d'adapter cette logique à votre application

  try {
    // Supprimer le token d'authentification (exemple avec un cookie)
    res.clearCookie('token'); // Assurez-vous d'adapter le nom du cookie à votre application
    
    // Répondre avec un message de succès
    res.status(200).json({ message: 'Déconnexion réussie' });
  } catch (error) {
    // En cas d'erreur, renvoyer une réponse d'erreur
    console.error('Erreur lors de la déconnexion :', error);
    res.status(500).json({ error: 'Erreur lors de la déconnexion' });
  }
});

export default logoutRouter;

