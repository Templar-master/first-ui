const Topbar = () => {
  const HREF_DEFAULT = '#';
  const handleClick = (e) => e.preventDefault();
  return (
    <>
      {/* Topbar Start */}
      <div className="navbar-custom topnav-navbar topnav-navbar-dark">
        <div className="container-fluid">

          {/* LOGO */}
          <a href="index.html" className="topnav-logo">
            <span className="topnav-logo-lg">
              <img src="assets/images/logo-light.png" alt="logo-light" height="16" />
            </span>
            <span className="topnav-logo-sm">
              <img src="assets/images/logo_sm.png" alt="logo_sm" height="16" />
            </span>
          </a>

          <ul className="list-unstyled topbar-right-menu float-right mb-0">

            <li className="dropdown notification-list d-lg-none">
              <a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href={HREF_DEFAULT} role="button" aria-haspopup="false" >
                <i className="dripicons-search noti-icon"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                <form className="p-3">
                  <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                </form>
              </div>
            </li>

            <li className="dropdown notification-list topbar-dropdown d-none d-lg-block">
              <a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" id="topbar-languagedrop" href={HREF_DEFAULT} role="button" aria-haspopup="true" >
                <img src="assets/images/flags/us.jpg" alt="user" className="mr-1" height="12" /> <span className="align-middle">English</span> <i className="mdi mdi-chevron-down"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu" aria-labelledby="topbar-languagedrop">

                {/* item*/}
                <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                  <img src="assets/images/flags/germany.jpg" alt="user" className="mr-1" height="12" /> <span className="align-middle">German</span>
                </a>

                {/* item*/}
                <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                  <img src="assets/images/flags/italy.jpg" alt="user" className="mr-1" height="12" /> <span className="align-middle">Italian</span>
                </a>

                {/* item*/}
                <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                  <img src="assets/images/flags/spain.jpg" alt="user" className="mr-1" height="12" /> <span className="align-middle">Spanish</span>
                </a>

                {/* item*/}
                <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                  <img src="assets/images/flags/russia.jpg" alt="user" className="mr-1" height="12" /> <span className="align-middle">Russian</span>
                </a>

              </div>
            </li>

            <li className="dropdown notification-list">
              <a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href={HREF_DEFAULT} id="topbar-notifydrop" role="button" aria-haspopup="true" >
                <i className="dripicons-bell noti-icon"></i>
                <span className="noti-icon-badge"></span>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg" aria-labelledby="topbar-notifydrop">

                {/* item*/}
                <div className="dropdown-item noti-title">
                  <h5 className="m-0">
                    <span className="float-right">
                      <a href={HREF_DEFAULT} onClick={handleClick} className="text-dark">
                        <small>Clear All</small>
                      </a>
                    </span>Notification
                  </h5>
                </div>

                <div style={{ maxHeight: '230px' }} data-simplebar>
                  {/* item*/}
                  <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                    <div className="notify-icon bg-primary">
                      <i className="mdi mdi-comment-account-outline"></i>
                    </div>
                    <p className="notify-details">Caleb Flakelar commented on Admin
                      <small className="text-muted">1 min ago</small>
                    </p>
                  </a>

                  {/* item*/}
                  <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                    <div className="notify-icon bg-info">
                      <i className="mdi mdi-account-plus"></i>
                    </div>
                    <p className="notify-details">New user registered.
                      <small className="text-muted">5 hours ago</small>
                    </p>
                  </a>

                  {/* item*/}
                  <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                    <div className="notify-icon">
                      <img src="assets/images/users/avatar-2.jpg" className="img-fluid rounded-circle" alt="mg-fluid" /> </div>
                    <p className="notify-details">Cristina Pride</p>
                    <p className="text-muted mb-0 user-msg">
                      <small>Hi, How are you? What about our next meeting</small>
                    </p>
                  </a>

                  {/* item*/}
                  <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                    <div className="notify-icon bg-primary">
                      <i className="mdi mdi-comment-account-outline"></i>
                    </div>
                    <p className="notify-details">Caleb Flakelar commented on Admin
                      <small className="text-muted">4 days ago</small>
                    </p>
                  </a>

                  {/* item*/}
                  <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                    <div className="notify-icon">
                      <img src="assets/images/users/avatar-4.jpg" className="img-fluid rounded-circle" alt="img-fluid" /> </div>
                    <p className="notify-details">Karen Robinson</p>
                    <p className="text-muted mb-0 user-msg">
                      <small>Wow ! this admin looks good and awesome design</small>
                    </p>
                  </a>

                  {/* item*/}
                  <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                    <div className="notify-icon bg-info">
                      <i className="mdi mdi-heart"></i>
                    </div>
                    <p className="notify-details">Carlos Crouch liked
                      <b>Admin</b>
                      <small className="text-muted">13 days ago</small>
                    </p>
                  </a>
                </div>

                {/* All*/}
                <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item text-center text-primary notify-item notify-all">
                  View All
                </a>

              </div>
            </li>

            <li className="dropdown notification-list d-none d-sm-inline-block">
              <a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href={HREF_DEFAULT} role="button" aria-haspopup="false" >
                <i className="dripicons-view-apps noti-icon"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg p-0">

                <div className="p-2">
                  <div className="row no-gutters">
                    <div className="col">
                      <a className="dropdown-icon-item" href={HREF_DEFAULT}>
                        <img src="assets/images/brands/slack.png" alt="slack" />
                        <span>Slack</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href={HREF_DEFAULT}>
                        <img src="assets/images/brands/github.png" alt="Github" />
                        <span>GitHub</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href={HREF_DEFAULT}>
                        <img src="assets/images/brands/dribbble.png" alt="dribbble" />
                        <span>Dribbble</span>
                      </a>
                    </div>
                  </div>

                  <div className="row no-gutters">
                    <div className="col">
                      <a className="dropdown-icon-item" href={HREF_DEFAULT}>
                        <img src="assets/images/brands/bitbucket.png" alt="bitbucket" />
                        <span>Bitbucket</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href={HREF_DEFAULT}>
                        <img src="assets/images/brands/dropbox.png" alt="dropbox" />
                        <span>Dropbox</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href={HREF_DEFAULT}>
                        <img src="assets/images/brands/g-suite.png" alt="G Suite" />
                        <span>G Suite</span>
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            </li>

            <li className="notification-list">
              <a className="nav-link right-bar-toggle" href={HREF_DEFAULT} onClick={handleClick}>
                <i className="dripicons-gear noti-icon"></i>
              </a>
            </li>

            <li className="dropdown notification-list">
              <a className="nav-link dropdown-toggle nav-user arrow-none mr-0" data-toggle="dropdown" id="topbar-userdrop" href={HREF_DEFAULT} role="button" aria-haspopup="true"
              >
                <span className="account-user-avatar">
                  <img src="assets/images/users/avatar-1.jpg" alt="user" className="rounded-circle" />
                </span>
                <span>
                  <span className="account-user-name">Dominic Keller</span>
                  <span className="account-position">Founder</span>
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown" aria-labelledby="topbar-userdrop">
                {/* item*/}
                <div className=" dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Welcome !</h6>
                </div>

                {/* item*/}
                <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                  <i className="mdi mdi-account-circle mr-1"></i>
                  <span>My Account</span>
                </a>

                {/* item*/}
                <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                  <i className="mdi mdi-account-edit mr-1"></i>
                  <span>Settings</span>
                </a>

                {/* item*/}
                <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                  <i className="mdi mdi-lifebuoy mr-1"></i>
                  <span>Support</span>
                </a>

                {/* item*/}
                <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                  <i className="mdi mdi-lock-outline mr-1"></i>
                  <span>Lock Screen</span>
                </a>

                {/* item*/}
                <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                  <i className="mdi mdi-logout mr-1"></i>
                  <span>Logout</span>
                </a>

              </div>
            </li>

          </ul>
          <a href={HREF_DEFAULT} onClick={handleClick} className="button-menu-mobile disable-btn">
            <div className="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
          <div className="app-search dropdown">
            <form>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search..." id="top-search" />
                <span className="mdi mdi-magnify search-icon"></span>
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">Search</button>
                </div>
              </div>
            </form>
            <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
              {/* item*/}
              <div className="dropdown-header noti-title">
                <h5 className="text-overflow mb-2">Found <span className="text-danger">17</span> results</h5>
              </div>

              {/* item*/}
              <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                <i className="uil-notes font-16 mr-1"></i>
                <span>Analytics Report</span>
              </a>

              {/* item*/}
              <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                <i className="uil-life-ring font-16 mr-1"></i>
                <span>How can I help you?</span>
              </a>

              {/* item*/}
              <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                <i className="uil-cog font-16 mr-1"></i>
                <span>User profile settings</span>
              </a>

              {/* item*/}
              <div className="dropdown-header noti-title">
                <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
              </div>

              <div className="notification-list">
                {/* item*/}
                <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                  <div className="media">
                    <img className="d-flex mr-2 rounded-circle" src="assets/images/users/avatar-2.jpg" alt="Generic placeholder" height="32" />
                    <div className="media-body">
                      <h5 className="m-0 font-14">Erwin Brown</h5>
                      <span className="font-12 mb-0">UI Designer</span>
                    </div>
                  </div>
                </a>

                {/* item*/}
                <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                  <div className="media">
                    <img className="d-flex mr-2 rounded-circle" src="assets/images/users/avatar-5.jpg" alt="Generic placeholder" height="32" />
                    <div className="media-body">
                      <h5 className="m-0 font-14">Jacob Deo</h5>
                      <span className="font-12 mb-0">Developer</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end Topbar */}
    </>
  );
};
export default Topbar;