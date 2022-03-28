import jwtDecode from 'jwt-decode';
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
          $.LeftSidebar.init();
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

  const data = {
    "email": "anabelle.schaefer@example.net",
    "password": "password",
    "location": {
      "address": "New York",
      "lat": 23123312,
      "log": 645234554
    },
    "references": [
      { "phone": 34545234563456 },
      { "phone": 4342134653456 },
      { "phone": 2453534567345 }
    ],
    "gender": 1
  };
  const options = {
    Accept: 'application/json',
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer eyJ0eXAiOiaJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTBkNDJiNTk2OWU3NGJkMmI0ZjFkZWY2Y2Q2Y2Q3NjVjNDY4NTQ3ZTJiNDU2NDFhMmRiMWUzNzM3ODMyOTBmNjc3YmM1YjNiMWY3NjE5NzUiLCJpYXQiOjE2MzQ4NzA0MTkuODQ1OTU0LCJuYmYiOjE2MzQ4NzA0MTkuODQ1OTYsImV4cCI6MTYzNzU0ODgxOS41NTAxNjgsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.aFjnRDzsL5QOGNLWDfRHLa7Xf_q2DPLYeaiHnhwAO4kW218YdtQuNSQ1wC8I175YHIncjiMqd-Z-05KpJb3q4X3KimpiKIsQnuIYzUP0cvYzOdkjCWRwFz4I6WfqsORxLE81mqS9ayOqRJp82Ei1VrqRxmyNUgmtkD-Q9rFlahS64oNUgHZe8yLVgp4l8dn714x6BlM-_NGRcCzI3X-i0fkIaruWi0OB2F4ulsm761Vhb77_JDOIix1Ye46zbTRJEJXVG8thyG7MEVOVQ9jd9ByZWU6haxYISXz5Ee-y_XSZaBCZwrXafZSqzqDdtn1QgWDr9FhmBGDNvtVxOmdSGQsIxANSIq9xORHCHXSgzrTlXVJ5D_6oaiZMpN6iMfj-29hbUpJilIDtBz_CJK0TNs95z-0v2CQCGfjKrJ41zKVIwgYcqOh26ZtAZ1YzIYMVGf573ZYzF3iO2bLJSRvOTPtoacSXUFb13xAfRGKWJPz1WY4j0wX1QYQ28nPU1YWqA32q4CnJ9SWP0e52h8fobnT84Lu0PSuf6L7BV6n_KiUwFrD8CI4TZGsXdIhWiVFn2dDoI05f6IzVZ5mDVkIQA45j4Pw6JBUJiJPQVjwGuczGPaqya_AblOR84V_OcXEkTq26YAwORlPdCk4KjW_Xq8snk_nCoSKcSHxn1cJrsVA',
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data) // body data type must match "Content-Type" header
  };

  const url = 'http://localhost:8000/api/user/all';

  fetch(url, options)
    .then(res => res.ok ? res.json() : Promise.reject({ err: true, status: res.status || '00', statusText: res.statusText || 'Denny hay un error' }))
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err));




  return <AuthContext.Provider
    value={{ auth, handleAuth }
    }
    children={children}
  />;
};

export default AuthContext;
export { AuthProvider };