import Topbar from './template/Topbar';
import LeftSidebar from './template/LeftSidebar';
import Footer from './template/Footer';
import RightSidebar from './template/RightSidebar';

const Starter = () => {
  const HREF_DEFAULT = '#';
  const handleClick = (e) => e.preventDefault();
  return (
    <>
      <Topbar />
      {/* Start Content*/}
      <div className="container-fluid">
        {/* Begin page */}
        <div className="wrapper">
          <LeftSidebar />
          <div className="content-page">
            <div className="content">
              {/* start page title */}
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box">
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item"><a href={HREF_DEFAULT} onClick={handleClick}>Hyper</a></li>
                        <li className="breadcrumb-item"><a href={HREF_DEFAULT} onClick={handleClick}>Pages</a></li>
                        <li className="breadcrumb-item active">Starter</li>
                      </ol>
                    </div>
                    <h4 className="page-title">Starter</h4>
                  </div>
                </div>
              </div>
              {/* end page title */}
            </div> {/* End Content */}
            <Footer />
          </div> {/* content-page */}
        </div> {/* end wrapper*/}
      </div>
      {/* END Container */}
      <RightSidebar />
    </>
  );
};
export default Starter;