import React from "react";

//import { useSelector } from "react-redux";
//import { logout } from "./AuthSlice.jsx";
import axios from "axios";
import Loading from "./Loading.jsx";
import { NavLink, Outlet } from "react-router-dom";
import {useUser} from './UserContext.jsx';
import { useNavigate } from "react-router-dom"; // Importer useHistory ici


//import { motion, AnimatePresence } from "framer-motion";

//import { loginUser } from './AuthSlice.jsx'


const UserProfile = () => {
  //const dispatch = useDispatch();

 /* const { userInfo, loading, error } = useSelector(
    (state) => state.auth
  );*/
 
    const  {logout}  = useUser(); // Obtenez la fonction logout du contexte
    const navigate = useNavigate();
    const userData = useUser();

    const handleLogout = async () => {
      try {
        await logout(); // Appel de la fonction logout du contexte
        navigate("/login"); // Rediriger l'utilisateur vers la page de connexion
      } catch (error) {
        console.error('Erreur lors de la déconnexion :', error);
      }
    };
  
  

  console.log('Données de l\'utilisateur :', userData);
  /*const onLogOut = () => {
    dispatch(logout());*/

  
    

   /*useEffect(() => {
      // Remplacez les valeurs par défaut par celles de l'utilisateur connecté
      dispatch(loginUser({ email: '', password: '' }));
    }, [dispatch]);*/
  
   
  

    return (
      <section className="h-auto pt-2 min-h-[80vh] bg-[#f9f9f9]">
        <div className=" max-w-xl lg:max-w-7xl relative px-5 py-20 items-center mx-auto lg:mx-20 xl:mx-28 2xl:mx-40 3xl:mx-auto lg:px-1 xl:px-3 2xl:px-1">
          <div className="flex gap-x-4 flex-col lg:flex-row">
            <div className="lg:bg-white lg:w-1/4 rounded-lg lg:shadow-md py-4 h-fit">
              <div className="profile-img-wrapper w-32 h-32 bg-grayish-blue rounded-full mx-auto relative">
                <button className="w-5 h-5 absolute right-3 hidden">
                
                </button>
              </div>
              <h3 className="capitalize text-lg text-center">
              <div className= "flex justify-center items-center mt-auto" style={{  margin: '-140px 0 0'  }} > </div>
              <ion-icon class="text-very-dark-blue" name="person-circle-outline" style={{ fontSize: '15rem' }}></ion-icon>
                <div className="font-bold ">
                  {userData && (
                    <>
                      {userData.name} 
                    </>
                  )}
                </div>
              </h3>
  
              <nav className="space-y-1 bg-white">
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    "text-dark-grayish-blue group  px-3 py-2 flex items-center text-sm font-medium" +
                    (!isActive
                      ? " hover:bg-light-grayish-blue"
                      : " border-l-4 bg-pale-orange border-orange hover:bg-pale-orange")
                  }
                  end
                  aria-current="page"
                  x-state-description='Current: "bg-pale-orange border-orange text-dark-grayish-blue", Default: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
                >
                  <ion-icon class="p-2 text-base" name="person"></ion-icon>
                  <span className="truncate">Mein Konto</span>
                </NavLink>
  
                <NavLink
                  to="orders"
                  className={({ isActive }) =>
                    "text-dark-grayish-blue group  px-3 py-2 flex items-center text-sm font-medium" +
                    (!isActive
                      ? " hover:bg-light-grayish-blue"
                      : " border-l-4 bg-pale-orange border-orange hover:bg-pale-orange")
                  }
                  x-state-description='undefined: "bg-pale-orange border-orange text-dark-grayish-blue", undefined: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
                >
                  <ion-icon class="p-2 text-base" name="basket"></ion-icon>
                  <span className="truncate">Meine Bestellungen</span>
                </NavLink>
  
                <NavLink
                  to="addresses"
                  className={({ isActive }) =>
                    "text-dark-grayish-blue group  px-3 py-2 flex items-center text-sm font-medium" +
                    (!isActive
                      ? " hover:bg-light-grayish-blue"
                      : " border-l-4 bg-pale-orange border-orange hover:bg-pale-orange")
                  }
                  x-state-description='undefined: "bg-pale-orange border-orange text-dark-grayish-blue", undefined: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
                >
                  <ion-icon class="p-2 text-base" name="location"></ion-icon>
                  <span className="truncate">Meine Adresse</span>
                </NavLink>
  
                <NavLink
                  to="notifications"
                  className={({ isActive }) =>
                    "text-dark-grayish-blue group  px-3 py-2 flex items-center text-sm font-medium" +
                    (!isActive
                      ? " hover:bg-light-grayish-blue"
                      : " border-l-4 bg-pale-orange border-orange hover:bg-pale-orange")
                  }
                  x-state-description='undefined: "bg-pale-orange border-orange text-dark-grayish-blue", undefined: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
                >
                  <ion-icon class="p-2 text-base" name="notifications"></ion-icon>
                  <span className="truncate">Benachrichtigung</span>
                </NavLink>
  
                <NavLink
                  to="password"
                  className={({ isActive }) =>
                    "text-dark-grayish-blue group  px-3 py-2 flex items-center text-sm font-medium" +
                    (!isActive
                      ? " hover:bg-light-grayish-blue"
                      : " border-l-4 bg-pale-orange border-orange hover:bg-pale-orange")
                  }
                  x-state-description='undefined: "bg-pale-orange border-orange text-dark-grayish-blue", undefined: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
                >
                  <ion-icon class="p-2 text-base" name="key"></ion-icon>
                  <span className="truncate">Passwort</span>
                </NavLink>
  
                <NavLink
                  to="settings"
                  className={({ isActive }) =>
                    "text-dark-grayish-blue group  px-3 py-2 flex items-center text-sm font-medium" +
                    (!isActive
                      ? " hover:bg-light-grayish-blue"
                      : " border-l-4 bg-pale-orange border-orange hover:bg-pale-orange")
                  }
                  x-state-description='undefined: "bg-pale-orange border-orange text-dark-grayish-blue", undefined: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
                >
                  <ion-icon class="p-2 text-base" name="settings"></ion-icon>
                  <span className="truncate">Einstellung</span>
                </NavLink>
                <hr className="text-grayish-blue" />
                <button
                  className="text-grayish-blue flex items-center px-3 py-2"
                  onClick={handleLogout} // Appeler handleLogout lorsque le bouton est cliqué
                >
                  <ion-icon class="p-2 text-base" name="log-out"></ion-icon>
                  <span className="truncate">Abmelden</span>
                </button>
              </nav>
            </div>
            <div className="bg-white flex-1 rounded-lg shadow-md p-8">
              
                          
                            <Outlet />
                               
              
            </div>
          </div>
        </div>
      </section>


    );
    
  };
  
  export default UserProfile;