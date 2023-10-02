/*import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({ email: '', name: '' });

  // Utilisez useEffect pour récupérer les données utilisateur depuis le backend
  useEffect(() => {
    // Vous pouvez effectuer une requête pour récupérer les données depuis le backend ici
    // Une fois que vous avez les données, mettez à jour l'état userData
    // Par exemple :
    fetchUserDataFromBackend().then((data) => {
      setUserData(data);
    });
  }, []);

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
}

// Supposons que vous ayez une fonction pour récupérer les données utilisateur depuis le backend
async function fetchUserDataFromBackend() {
  // Effectuez une requête HTTP pour obtenir les données utilisateur
  const response = await axios.get('http://localhost:5000/profile');

   console.log("response",response)
    const userData = response.data;
    console.log("userData", userData)
    return userData;
 
}*/

// UserContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({ email: '', name: '', strasse: '', hausnummer: '', postleitzahl: '', ort: '' });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/profile');
        const userDataFromBackend = response.data;
        console.log(response.data)
        setUserData(userDataFromBackend);
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur :', error);
      }
    };

    fetchUserData();
  }, []);

  // Ajoutez une fonction pour mettre à jour les données utilisateur
  const updateUserData = (newUserData) => {
    setUserData(newUserData);
  };

// Fonction pour gérer la déconnexion (et effacer les cookies)
const logout = async () => {
  try {
    // Appel à l'API pour déconnecter l'utilisateur
    await axios.post('/api/logout');

    // Effacer les cookies en utilisant des fonctions natives de JavaScript
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Mettez à jour le contexte avec des données vides
    setUserData({ email: '', name: '', strasse: '', hausnummer: '', postleitzahl: '', ort: '' });
  } catch (error) {
    console.error('Erreur lors de la déconnexion :', error);
  }
};


  return (
    <UserContext.Provider value={{ ...userData, updateUserData,logout }}>
      {children}
    </UserContext.Provider>
  );
}