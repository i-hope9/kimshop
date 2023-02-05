import { createContext, useContext, useEffect, useState } from "react";
import { googleSignIn, googleSignOut, onUserStateChanged } from "../../api/firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, googleSignIn: googleSignIn, googleSignOut: googleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
