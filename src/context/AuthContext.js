import { useState, createContext } from 'react';

const AuthContext = createContext();
const InitialAuth = true;

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(InitialAuth);
  const handleAuth = () => {
    if (auth) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  }
  const data = {
    auth,
    handleAuth
  };
  return <AuthContext.Provider value={data} children={children} />
};

export default AuthContext;
export { AuthProvider };