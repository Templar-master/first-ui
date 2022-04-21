import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

import { allFlattenRoutes } from '../routes/index';

import AuthLayout from '../layouts/AuthLayout';
import DetachedLayout from '../layouts/DetachedLayout';

import PageNotFound404 from '../pages/error/PageNotFound404';
import PageNotFoundAlt404 from '../pages/error/PageNotFoundAlt404';

const RoutesAll = (props) => {
  // const { isAuthenticated, handleAuth } = useContext(AuthContext);// para que funcione el boton de prubas
  const { isAuthenticated } = useContext(AuthContext);
  // console.log(props);
  // const isAuthenticated = auth;
  let Layout = null;
  if (isAuthenticated) {
    Layout = DetachedLayout;
  } else {
    Layout = AuthLayout;
  }
  return (
    <>
      {/* <button onClick={handleAuth}>login??</button> */}

      <BrowserRouter>
        {/* <Link to='/dashboard/analytics'>Dash-analitics</Link>
        <Link to='/saxa'>otra cosa</Link> */}
        <Layout {...props}>
          <Routes>
            {
              allFlattenRoutes.map((route, index) =>
                !route.children &&
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  element={<route.route children={route.component} roles={route.roles} />}
                />
              )
            }
            {
              isAuthenticated
                ? <Route path='*' element={<PageNotFoundAlt404 />} />
                : <Route path='*' element={<PageNotFound404 />} />
            }
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};
export default RoutesAll;