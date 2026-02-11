import React, { createContext, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ checkAuth, children }) => {
  return (
    <AuthContext.Provider value={{ checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
