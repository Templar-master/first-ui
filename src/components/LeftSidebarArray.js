import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import profilePic from '../assets/images/users/avatar-3.jpg';
import { authProtectedRoutes as menuItems } from '../routes/index.js';


const userPerfil = {
  profilePic: profilePic,
  userName: 'Denny Castillo',
  userTitle: 'Founder',
  role: 'Admin'
};

const MenuBar = ({ level = 1, menuItems }) => {
  let uno = ['metismenu side-nav', 'side-nav-second-level', 'side-nav-third-level', 'side-nav-forth-level', 'side-nav-fifth-level'];
  let dos = level;
  return (
    <ul className={uno[level - 1]}>
      {
        menuItems.map((item, i) => (item.roles && item.roles.indexOf(userPerfil.role) === -1) ?
          // role not authorised so redirect to home page
          false :
          <React.Fragment key={i}>
            {item.header && <li className="side-nav-title side-nav-item">{item.header}</li>}
            <li key={i + '-li-menu'} className={'side-nav-item' + (item.active ? ' mm-active' : '')}>
              <Link to={item.path} onClick={item.children && (e => e.preventDefault())} className={level === 1 ? "side-nav-link" : null}>
                {item.icon ? <i className={item.icon} /> : null}
                {item.badge ? <span className={`badge badge-${item.badge.variant}-lighten badge-pill float-right`}>{item.badge.text}</span> : (item.children && <span className="menu-arrow"></span>)}
                <span> {item.name} </span>
              </Link>
              {item.children && <MenuBar menuItems={item.children} level={dos + 1} />}
            </li>
          </React.Fragment>
        )
      }
    </ul >
  );
};

// MenuBar.defaultProps = { level: 1 };

const LeftSidebar = () => {
  const HREF_DEFAULT = '#';
  const handleClick = (e) => e.preventDefault();
  return (
    <>
      {/* ========== Left Sidebar Start ========== */}
      <div className="left-side-menu mm-show">

        <div className="leftbar-user">
          <a href={HREF_DEFAULT} onClick={handleClick}>
            <img src={userPerfil.profilePic} alt="user" height="42" className="rounded-circle shadow-sm" />
            <span className="leftbar-user-name">{userPerfil.userName}</span>
          </a>
        </div>
        {/*- Sidemenu */}
        <MenuBar menuItems={menuItems} />
        {/* Help Box */}
        <div className="help-box text-center">
          <a href={HREF_DEFAULT} onClick={handleClick} className="float-right close-btn text-body">
            <i className="mdi mdi-close"></i>
          </a>
          <img src="/assets/images/help-icon.svg" height="90" alt="Helper Icon" />
          <h5 className="mt-3">Unlimited Access</h5>
          <p className="mb-3">Upgrade to plan to get access to unlimited reports</p>
          <a href={HREF_DEFAULT} onClick={handleClick} className="btn btn-outline-primary btn-sm">Upgrade</a>
        </div>
        {/* end Help Box */}
        {/* End Sidebar */}

        <div className="clearfix"></div>
        {/* Sidebar -left */}

      </div>
      {/* Left Sidebar End */}
    </>
  );
};
export default LeftSidebar;