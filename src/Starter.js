import { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Topbar from './components/Topbar';
import LeftSidebarArray from './components/LeftSidebarArray';
import Footer from './components/Footer';
import RightSidebar from './components/RightSidebar';

import { allFlattenRoutes } from './routes/index';
import Error404 from './pages/Error404';

const Starter = () => {
  return (
    <>
      <Topbar />
      {/* Start Content */}
      <div className="container-fluid">
        {/* Begin page */}
        <Router>
          <div className="wrapper">
            <LeftSidebarArray />
            <div className="content-page">
              <div className="content">
                <Suspense fallback={<div>LOADING</div>}>
                  <Switch>
                    {
                      allFlattenRoutes.map((item, index) => {
                        // console.log('item.path', item.path, 'route', item.route)
                        return (!item.children && (
                          <item.route
                            key={index}
                            path={item.path}
                            roles={item.roles}
                            name={item.name}
                            dos={'DOS'}
                            exact={item.exact}
                            component={item.component}>
                          </item.route>
                        ));
                      }
                      )
                    }
                    <Route path='*' component={Error404} />
                  </Switch>
                </Suspense>
              </div> {/* End Content */}
              <Footer />
            </div> {/* content-page */}
          </div> {/* end wrapper */}
        </Router>

      </div>
      {/* END Container */}
      <RightSidebar />
    </>
  );
};
export default Starter;