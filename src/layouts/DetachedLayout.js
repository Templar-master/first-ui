import { Suspense } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Topbar from '../components/Topbar';
import LeftSidebarArray from '../components/LeftSidebarArray';
import Footer from '../components/Footer';
import RightSidebar from '../components/RightSidebar';
import Loader from '../components/Loader';

const DetachedLayout = ({ children }) => {
  return (
    <>
      <Topbar />
      {/* Start Content */}
      <div className="container-fluid">
        {/* Begin page */}

        <div className="wrapper">
          <LeftSidebarArray />
          <div className="content-page">
            <div className="content">

              <Suspense fallback={<Loader />}>{children}</Suspense>

            </div> {/* End Content */}
            <Footer />
          </div> {/* content-page */}
        </div> {/* end wrapper */}

      </div>
      {/* END Container */}
      <RightSidebar />
    </>
  );
};
export default DetachedLayout;