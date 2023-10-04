import React from "react";
//import { useSelector } from "react-redux";
import {useUser} from './UserContext.jsx';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const MyAccount = () => {
  //document.title = "My Account";
  const userData = useUser();

  
  console.log('Données de l\'utilisateur :', userData);
  return (
    
    <AnimatePresence>
      <h3 className="text-xl leading-6 font-bold text-gray-900">Dein Benutzerkonto</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        Wilkommen in deinen Benuzterkonto. Hier sind deine Persönliche Daten
      </p>
      <hr className="border-b border-grayish-blue mt-3 mb-8" />
      <dl className="grid grid-cols-1 gap-x-4 sm:grid-cols-1 divide-y divide-gray-200">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="sm:grid sm:grid-cols-3 sm:gap-4 py-4"
        >
          <dt className="text-sm font-medium text-dark-grayish-blue px-2">
            Vorname
          </dt>
          <dd className="mt-1 flex text-sm text-very-dark-blue sm:mt-0 sm:col-span-2">
            <span className="sm:flex flex-grow px-2">
              {userData.name} 
            </span>
          </dd>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="sm:grid sm:grid-cols-3 sm:gap-4 py-4"
        >
          <dt className="text-sm font-medium text-dark-grayish-blue px-2">
            Email
          </dt>
          <dd className="mt-1 flex text-sm text-very-dark-blue sm:mt-0 sm:col-span-2 px-2">
            {userData.email}
          </dd>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center h-full"
          >
            <div className="flex items-center justify-center h-full mt-20">
              {/* Ajoutez un lien vers Your Bookstore */}
              <Link to="/"> 
              <button className="bg-primary py-4 btn w-64 rounded-full text-base leading-3 font-bold text-gray-900"> 
              Zurück zum shop
              </button>
              </Link>
            </div>
          </motion.div>
      </dl>
    </AnimatePresence>
    
  );
};

export default MyAccount;