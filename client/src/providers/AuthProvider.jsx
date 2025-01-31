import demoUser from "../../src/assets/img/demo_user/demo-user.jpeg";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../../firebase/firebase.config.js";

export const UserContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOutUser = () => {
    setLoading(false);
    return signOut(auth);
  };

  const updateUserProfile = (displayName, photoURL = demoUser) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  // Truck the current user status:
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const userInfo = {
    createUser,
    user,
    logOutUser,
    loginUser,
    setLoading,
    loading,
    updateUserProfile,
    logInWithGoogle,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default AuthProvider;
