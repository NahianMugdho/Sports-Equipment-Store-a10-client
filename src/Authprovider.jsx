import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase.init';
export const AuthContext = createContext(null)
const Authprovider = ({children}) => {
    const [user,setUser]=useState(null);
    const[loading,setLoading]= useState(true)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false); // Stop loading once user state is determined
        });
    
        // Cleanup the listener when the component unmounts
        return () => unsubscribe();
      }, []);
    
    const createUser=(email,pass)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    const logInUser =(email,pass)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }

    const logOut=()=>
        {
            return signOut(auth)
            .then(() => {
                // Sign-out successful.
              }).catch((error) => {
                // An error happened.
              });
    }

// Cart state
const [cartItems, setCartItems] = useState([]);

// Add item to cart
const addToCart = (item) => {
    setCartItems((prevCart) => [...prevCart, item]);
};

// Remove item from cart (optional)
const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item._id !== id));
};

    const userInfo={
user,loading,createUser,logInUser,logOut,cartItems,addToCart,removeFromCart,

    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
                 </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;