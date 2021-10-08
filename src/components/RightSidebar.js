const RightSidebar = () => {
  const HREF_DEFAULT = '#';
  const handleClick = (e) => e.preventDefault();
  return (
    <>
      {/* Right Sidebar */}
      <div className="right-bar">

        <div className="rightbar-title">
          <a href={HREF_DEFAULT} onClick={handleClick} className="right-bar-toggle float-right">
            <i className="dripicons-cross noti-icon"></i>
          </a>
          <h5 className="m-0">Settings</h5>
        </div>

        <div className="rightbar-content h-100" data-simplebar>

          <div className="p-3">
            <div className="alert alert-warning" role="alert">
              <strong>Customize </strong> the overall color scheme, sidebar menu, etc.
            </div>

            {/* Settings */}
            <h5 className="mt-3">Color Scheme</h5>
            <hr className="mt-1" />

            <div className="custom-control custom-switch mb-1">
              <input type="radio" className="custom-control-input" name="color-scheme-mode" value="light"
                id="light-mode-check" defaultChecked />
              <label className="custom-control-label" htmlFor="light-mode-check">Light Mode</label>
            </div>

            <div className="custom-control custom-switch mb-1">
              <input type="radio" className="custom-control-input" name="color-scheme-mode" value="dark"
                id="dark-mode-check" />
              <label className="custom-control-label" htmlFor="dark-mode-check">Dark Mode</label>
            </div>

            {/* Left Sidebar*/}
            <h5 className="mt-4">Left Sidebar</h5>
            <hr className="mt-1" />

            <div className="custom-control custom-switch mb-1">
              <input type="radio" className="custom-control-input" name="compact" value="fixed" id="fixed-check"
                defaultChecked />
              <label className="custom-control-label" htmlFor="fixed-check">Scrollable</label>
            </div>

            <div className="custom-control custom-switch mb-1">
              <input type="radio" className="custom-control-input" name="compact" value="condensed"
                id="condensed-check" />
              <label className="custom-control-label" htmlFor="condensed-check">Condensed</label>
            </div>

            <button className="btn btn-primary btn-block mt-4" id="resetBtn">Reset to Default</button>

            <a href="https://themes.getbootstrap.com/product/hyper-responsive-admin-dashboard-template/"
              className="btn btn-danger btn-block mt-3" target="_blank" rel="noreferrer"><i className="mdi mdi-basket mr-1"></i> Purchase
              Now</a>
          </div> {/* end padding*/}

        </div>
      </div>

      <div className="rightbar-overlay"></div>
      {/* /Right-bar */}
    </>
  );
};
export default RightSidebar;