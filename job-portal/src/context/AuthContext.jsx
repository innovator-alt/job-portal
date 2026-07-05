import { createContext, useEffect, useState } from "react";
import {
  loginUser,
  registerUser,
  loginWithGoogle,
  logoutUser,
  forgotPassword,
  observeAuth,
} from "../services/authService";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = observeAuth((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signup = (email, password) =>
    registerUser(email, password);

  const login = (email, password) =>
    loginUser(email, password);

  const googleLogin = () =>
    loginWithGoogle();

  const logout = () =>
    logoutUser();

  const resetPassword = (email) =>
    forgotPassword(email);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signup,
        login,
        googleLogin,
        logout,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;