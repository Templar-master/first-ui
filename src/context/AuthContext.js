import { useState, createContext, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(true);
  const handleAuth = () => setAuth(!auth);

  useEffect(() => {
    if (auth) {
      const script = document.createElement("script");
      script.id = 'init';
      script.defer = true;
      script.text = `
        setTimeout(() => {
          $.LeftSidebar.init();
          $.Topbar.init();
          // $.LayoutThemeApp.init();
          $.RightBar.init();
          $.Portlet.init();
          $.AdvanceFormApp.init();
          $.Components.init();
          $.RightBar.init();
        }, 1); //esperamos 1 microsegundo para que cargue vendor que contiene jQuery
      `;
      script.type = 'text/javascript';
      document.body.appendChild(script);
      return () => document.getElementById('init').remove();//removemos el servicio
    }

    //---- otra forma llamando a un script pre defeinido
    // const script = document.createElement("script");
    // script.id = 'init';
    // script.src = '/assets/js/init.js';
    // script.defer = true;
    // // script.textContent = "console.log('holaaa333')"
    // script.type = 'text/javascript';
    // // console.log(script)
    // document.body.appendChild(script);
    // // document.getElementById('init').remove();
    //------------------------------------------------
  }, [auth]);

  return <AuthContext.Provider
    value={{ auth, handleAuth }}
    children={children}
  />;
};

export default AuthContext;
export { AuthProvider };