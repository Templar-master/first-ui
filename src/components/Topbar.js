import NotificationDropdown from "./NotificationDropdown";
import LanguageDropdown from './LanguageDropdown/index';
import AppDropdown from "./AppsDropdown";
import ProfileDropdown from "./ProfileDropdown";

import profilePic from '../assets/images/users/avatar-3.jpg'
import logoLight from '../assets/images/logo-light.png';
import logoSm from '../assets/images/logo_sm.png';
import TopbarSearch from "./TopbarSearch";

const notifications = [
  {
    id: 1,
    text: 'Caleb Flakelar commented on Admin',
    subText: '1 min ago',
    icon: 'mdi mdi-comment-account-outline',
    bgColor: 'primary',
  },
  {
    id: 2,
    text: 'New user registered.',
    subText: '5 min ago',
    icon: 'mdi mdi-account-plus',
    bgColor: 'info',
  },
  {
    id: 3,
    text: 'Cristina Pride',
    subText: 'Hi, How are you? What about our next meeting',
    icon: 'mdi mdi-comment-account-outline',
    bgColor: 'success',
  },
  {
    id: 4,
    text: 'Caleb Flakelar commented on Admin',
    subText: '2 days ago',
    icon: 'mdi mdi-comment-account-outline',
    bgColor: 'danger',
  },
  {
    id: 5,
    text: 'Caleb Flakelar commented on Admin',
    subText: '1 min ago',
    icon: 'mdi mdi-comment-account-outline',
    bgColor: 'primary',
  },
  {
    id: 6,
    text: 'New user registered.',
    subText: '5 min ago',
    icon: 'mdi mdi-account-plus',
    bgColor: 'info',
  },
  {
    id: 7,
    text: 'Cristina Pride',
    subText: 'Hi, How are you? What about our next meeting',
    icon: 'mdi mdi-comment-account-outline',
    bgColor: 'success',
  },
  {
    id: 8,
    text: 'Caleb Flakelar commented on Admin',
    subText: '2 days ago',
    icon: 'mdi mdi-comment-account-outline',
    bgColor: 'danger',
  },
  {
    id: 9,
    text: 'Denny Castillo recibio un aumento por ser el mejor',
    subText: '30 min ago',
    image: '/assets/images/users/avatar-3.jpg',
  },
];
const profileMenus = [
  {
    label: 'My Account',
    icon: 'mdi mdi-account-circle',
    redirectTo: '/',
  },
  {
    label: 'Settings',
    icon: 'mdi mdi-account-edit',
    redirectTo: '/',
  },
  {
    label: 'Support',
    icon: 'mdi mdi-lifebuoy',
    redirectTo: '/',
  },
  {
    label: 'Lock Screen',
    icon: 'mdi mdi-lock-outline',
    redirectTo: '/',
  },
  {
    label: 'Logout',
    icon: 'mdi mdi-logout',
    redirectTo: '/account/logout',
  },
];
const searchResults = [
  {
    id: 1,
    title: 'Analytics Report',
    icon: 'uil-notes',
    redirectTo: '/'
  },
  {
    id: 2,
    title: 'How can I help you?',
    icon: 'uil-life-ring',
    redirectTo: '/'
  },
  {
    id: 3,
    icon: 'uil-cog',
    title: 'User profile settings',
    redirectTo: '/'
  }, {
    id: 4,
    icon: 'uil-user',
    title: 'Erwin Brown (UI)',
    redirectTo: '/'
  },
  {
    id: 5,
    icon: 'uil-user',
    title: 'Jacob Deo (Dev)',
    redirectTo: '/'
  }
];

const Topbar = () => {
  const HREF_DEFAULT = '#';
  const handleClick = (e) => e.preventDefault();
  return (
    <>
      {/* Topbar Start */}
      <div className="navbar-custom topnav-navbar topnav-navbar-dark">
        <div className="container-fluid">

          {/* LOGO */}
          <a href="/" className="topnav-logo" onClick={handleClick}>
            <span className="topnav-logo-lg">
              <img src={logoLight} alt="logo-light" height="16" />
            </span>
            <span className="topnav-logo-sm">
              <img src={logoSm} alt="logo_sm" height="16" />
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
              <LanguageDropdown />
            </li>

            <li className="dropdown notification-list">
              <NotificationDropdown notifications={notifications} />
            </li>

            <li className="dropdown notification-list d-none d-sm-inline-block">
              <AppDropdown />
            </li>

            <li className="notification-list">
              <a className="nav-link right-bar-toggle" href={HREF_DEFAULT} onClick={handleClick}>
                <i className="dripicons-gear noti-icon"></i>
              </a>
            </li>

            <li className="dropdown notification-list">
              <ProfileDropdown
                profilePic={profilePic}
                menuItems={profileMenus}
                userName={'Denny Castillo'}
                userTitle={'Founder'}
              />
            </li>

          </ul>
          <a href={HREF_DEFAULT} onClick={handleClick} className="button-menu-mobile disable-btn">
            <div className="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
          <TopbarSearch searchResults={searchResults} />
        </div>
      </div>
      {/* end Topbar */}
    </>
  );
};
export default Topbar;