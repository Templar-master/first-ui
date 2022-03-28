import { BrowserRouter, Route, Navigate, Link, Routes as Rutas} from 'react-router-dom';

import { allFlattenRoutes } from '../routes/index';
// import { isUserAuthenticated } from '../helpers/AuthUtils';

import AuthLayout from '../layouts/AuthLayout';
import DetachedLayout from '../layouts/DetachedLayout';
import Error404 from '../pages/error/Error404';

import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Routes = (props) => {
  const { auth, handleAuth } = useContext(AuthContext);
  // console.log(props);
  let Layout = null;
  if (auth) {
    Layout = DetachedLayout;
  } else {
    Layout = AuthLayout;
  }
  return (
    <>
      <button onClick={handleAuth}>login??</button>

      <BrowserRouter>
        <Link to='/dashboard/analytics'>al dash</Link>
        <Link to='/saxa'>otra cosa</Link>
        <Layout {...props}>
          <Rutas>
            {
              allFlattenRoutes.map((route, index) =>
                !route.children &&
                <route.route
                  key={index}
                  path={route.path}
                  roles={route.roles}
                  exact={route.exact}
                  component={route.component}>
                </route.route>
              )
            }
            {
              auth
                ? <Route path='*' component={Error404} />
                : <Route path='*'><Navigate to='/' /></Route>
            }
          </Rutas>
        </Layout>
      </BrowserRouter>
    </>
  );
};
export default Routes;