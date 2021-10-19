import SimpleBar from 'simplebar-react'; //Libreria instalada "npm install simplebar-react"

const NotificationDropdown = ({ notifications }) => {
  const HREF_DEFAULT = '#';
  const handleClick = (e) => e.preventDefault();

  return (
    <>
      <a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href={HREF_DEFAULT} id="topbar-notifydrop" role="button" aria-haspopup="true" >
        <i className="dripicons-bell noti-icon"></i>
        {/* <span className="noti-icon-badge"></span> */}
        {notifications.length > 0 ? <span className="badge badge-info">{notifications.length}</span> : null}
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

        <SimpleBar style={{ maxHeight: '230px' }}>
          {
            notifications.length > 0 ?
              notifications.map((item, i) =>
                <a key={i + '-noti'} href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                  <div className={`notify-icon ${item.image ? null : 'bg-' + item.bgColor} `}>
                    {
                      item.image ?
                        <img src={item.image} className="img-fluid rounded-circle" alt="img-fluid" />
                        :
                        <i className={item.icon}></i>
                    }
                  </div>
                  <p className="notify-details">{item.text}
                    <small className="text-muted">{item.subText}</small>
                  </p>
                </a>
              ) :
              <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item notify-item">
                <p className="text-center">
                  <small className="text-muted">NO Notifications</small>
                </p>
              </a>
          }
        </SimpleBar>
        {/* All*/}
        <a href={HREF_DEFAULT} onClick={handleClick} className="dropdown-item text-center text-primary notify-item notify-all">
          View All
        </a>

      </div>
    </>
  );
};
export default NotificationDropdown;