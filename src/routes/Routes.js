import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { allFlattenRoutes } from '../routes/index';
import { isUserAuthenticated } from '../helpers/AuthUtils';

import AuthLayout from '../layouts/AuthLayout';
import DetachedLayout from '../layouts/DetachedLayout';
import Error404 from '../pages/error/Error404';

const Routes = (props) => {
  // console.log(props);
  let Layout = null;
  if (isUserAuthenticated()) {
    Layout = DetachedLayout;
  } else {
    Layout = AuthLayout;
  }
  return (
    <Router>
      <Layout {...props}>
        <Switch>
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
            isUserAuthenticated()
              ? <Route path='*' component={Error404} />
              : <Route path='*'><Redirect to='/' /></Route>
          }
        </Switch>
      </Layout>
    </Router>
  );
};
export default Routes;