const TopbarSearch = ({ searchResults }) => {
  const resultItems = searchResults || [];
  return (
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
          <h5 className="text-overflow mb-2">Found <span className="text-danger">{resultItems.length}</span> results</h5>
        </div>

        {resultItems.map((item, i) =>
          <a href={item.redirectTo} key={i} className="dropdown-item notify-item">
            <i className={`${item.icon} font-16 mr-1`}></i>
            <span>{item.title}</span>
          </a>
        )}

        {/* item*/}
        <div className="dropdown-header noti-title">
          <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
        </div>

        <div className="notification-list">
          {/* item*/}
          <a href='/' className="dropdown-item notify-item">
            <div className="media">
              <img className="d-flex mr-2 rounded-circle" src="/assets/images/users/avatar-2.jpg" alt="Generic placeholder" height="32" />
              <div className="media-body">
                <h5 className="m-0 font-14">Erwin Brown</h5>
                <span className="font-12 mb-0">UI Designer</span>
              </div>
            </div>
          </a>

          {/* item*/}
          <a href='/' className="dropdown-item notify-item">
            <div className="media">
              <img className="d-flex mr-2 rounded-circle" src="/assets/images/users/avatar-5.jpg" alt="Generic placeholder" height="32" />
              <div className="media-body">
                <h5 className="m-0 font-14">Jacob Deo</h5>
                <span className="font-12 mb-0">Developer</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default TopbarSearch;