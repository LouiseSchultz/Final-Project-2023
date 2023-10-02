// Adresse.jsx
import React from 'react';
import { useUser } from './UserContext';
import { motion, AnimatePresence } from "framer-motion";


const MyAddress = () => {
  const userData  = useUser();
  console.log('Données de l\'utilisateur :', userData);

  return (
    <AnimatePresence>
      <h3 className="text-xl leading-6 font-bold text-gray-900">Deine Adresse</h3>
      
      <hr className="border-b border-grayish-blue mt-3 mb-8" />
      <dl className="grid grid-cols-1 gap-x-4 sm:grid-cols-1 divide-y divide-gray-200">
      
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="sm:grid sm:grid-cols-3 sm:gap-4 py-4"
        >
          <dt className="text-sm font-medium text-dark-grayish-blue px-2">
            Straẞe
          </dt>
          <dd className="mt-1 flex text-sm text-very-dark-blue sm:mt-0 sm:col-span-2">
            <span className="sm:flex flex-grow px-2">
             {userData.strasse} 
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
            Hausnummer
          </dt>
          <dd className="mt-1 flex text-sm text-very-dark-blue sm:mt-0 sm:col-span-2 px-2">
            {userData.hausnummer}
          </dd>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="sm:grid sm:grid-cols-3 sm:gap-4 py-4"
        >
          <dt className="text-sm font-medium text-dark-grayish-blue px-2">
            Postleitzahl
          </dt>
          <dd className="mt-1 flex text-sm text-very-dark-blue sm:mt-0 sm:col-span-2 px-2">
            {userData.postleitzahl}
          </dd>
          </motion.div>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="sm:grid sm:grid-cols-3 sm:gap-4 py-4"
        >
          <dt className="text-sm font-medium text-dark-grayish-blue px-2">
            Ort
          </dt>
          <dd className="mt-1 flex text-sm text-very-dark-blue sm:mt-0 sm:col-span-2 px-2">
            {userData.ort}
          </dd>
          </motion.div>
        
      </dl>
    </AnimatePresence>
    
  );
};

export default MyAddress;