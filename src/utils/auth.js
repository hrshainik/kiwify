import React, { useState, useContext, createContext } from "react";
import "../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useAuthProvider() {
  const [user, setUser] = useState(null);

  const handleUser = async (rawUser) => {
    if (rawUser) {
      setUser(rawUser);
      return user;
    } else {
      setUser(false);
      return false;
    }
  };

  const signin = async (email, password) => {
    try {
      const auth = getAuth();
      const res = await signInWithEmailAndPassword(auth, email, password);
      handleUser(res.user);
    } catch (error) {
      return "Não existe um usuário com esse e-mail";
    }
  };

  const signup = async (email, password) => {
    const auth = getAuth();

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      handleUser(res.user);
    } catch (error) {
      // console.log(error);
    }
  };

  const signout = async () => {
    const auth = getAuth();

    try {
      await signOut(auth);
      handleUser(false);
    } catch (error) {
      // console.log(error);
    }
  };

  return {
    user,
    signin,
    signup,
    signout,
  };
}
