import { Redirect } from 'react-router';
// import { isUserAuthenticated } from '../../helpers/AuthUtils';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const Login = () => {
  const { auth, handleAuth } = useContext(AuthContext);
  if (auth) {
    return <Redirect to='/' />
  }
  return (
    <div className="account-pages mt-5 mb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card">

              <div className="card-header pt-4 pb-4 text-center bg-primary">
                <a href="index.html">
                  <span><img src="assets/images/logo.png" alt="" height="18" /></span>
                </a>
              </div>

              <div className="card-body p-4">

                <div className="text-center w-75 m-auto">
                  <h4 className="text-dark-50 text-center mt-0 font-weight-bold">Sign In</h4>
                  <p className="text-muted mb-4">Enter your email address and password to access admin panel.</p>
                </div>

                <form action="#" onSubmit={() => handleAuth()}>

                  <div className="form-group">
                    <label htmlFor="emailaddress">Email address</label>
                    <input className="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email" />
                  </div>

                  <div className="form-group">
                    <a href="pages-recoverpw.html" className="text-muted float-right"><small>Forgot your password?</small></a>
                    <label htmlFor="password">Password</label>
                    <div className="input-group input-group-merge">
                      <input type="password" id="password" className="form-control" placeholder="Enter your password" />
                      <div className="input-group-append" data-password="false">
                        <div className="input-group-text">
                          <span className="password-eye"></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="checkbox-signin" defaultChecked />
                      <label className="custom-control-label" htmlFor="checkbox-signin">Remember me</label>
                    </div>
                  </div>

                  <div className="form-group mb-0 text-center">
                    <button className="btn btn-primary" type="submit"> Log In </button>
                  </div>

                </form>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12 text-center">
                <p className="text-muted">Don't have an account? <a href="pages-register.html" className="text-muted ml-1"><b>Sign Up</b></a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;