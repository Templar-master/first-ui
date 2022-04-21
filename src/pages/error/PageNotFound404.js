import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const PageNotFound404 = () => {
  return (
    <>
      <div className="account-pages mt-5 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="card">
                {/* Logo */}
                <div className="card-header pt-4 pb-4 text-center bg-primary">
                  <a href="index.html">
                    <span><img src={logo} alt="logo" height="18" /></span>
                  </a>
                </div>

                <div className="card-body p-4">
                  <div className="text-center">
                    <h1 className="text-error">4<i className="mdi mdi-emoticon-sad"></i>4</h1>
                    <h4 className="text-uppercase text-danger mt-3">Page Not Found</h4>
                    <p className="text-muted mt-3">It's looking like you may have taken a wrong turn. Don't worry... it
                      happens to the best of us. Here's a
                      little tip that might help you get back on track.</p>

                    <Link className="btn btn-info mt-3" to='/'>
                      <i className="mdi mdi-reply"></i> Return Home</Link>
                  </div>
                </div> {/* end card-body */}
              </div>
              {/* end card */}
            </div>{/* end col */}
          </div>
          {/* <! end row */}
        </div>
        {/* end container */}
      </div>
      {/* end page */}

      <footer className="footer footer-alt">
        2018 - 2022 © Hyper - Coderthemes.com
      </footer>
    </>
  );
};
export default PageNotFound404;