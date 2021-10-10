import { Link } from "react-router-dom";

const ProfileDropdown = ({ profilePic, menuItems, userName, userTitle }) => {
  const HREF_DEFAULT = '#';
  // const handleClick = (e) => e.preventDefault();

  return (
    <>
      <a className="nav-link dropdown-toggle nav-user arrow-none mr-0" data-toggle="dropdown" id="topbar-userdrop" href={HREF_DEFAULT} role="button" aria-haspopup="true">
        <span className="account-user-avatar">
          <img src={profilePic} alt="user" className="rounded-circle" />
        </span>
        <span>
          <span className="account-user-name">{userName}</span>
          <span className="account-position">{userTitle}</span>
        </span>
      </a>
      <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown" aria-labelledby="topbar-userdrop">
        {/* item*/}
        <div className=" dropdown-header noti-title">
          <h6 className="text-overflow m-0">Welcome !</h6>
        </div>
        {menuItems.map((item, i) =>
          <Link to={item.redirectTo} key={i + '-profile-menu'} className="dropdown-item notify-item">
            <i className={`${item.icon} mr-1`}></i>
            <span>{item.label}</span>
          </Link>
        )}
      </div>
    </>
  );
};
export default ProfileDropdown;