const LeftSidebar = () => {
  const HREF_DEFAULT = '#';
  const handleClick = (e) => e.preventDefault();
  return (
    <>
      {/* ========== Left Sidebar Start ========== */}
      <div className="left-side-menu left-side-menu-detached">

        <div className="leftbar-user">
          <a href={HREF_DEFAULT} onClick={handleClick}>
            <img src="assets/images/users/avatar-1.jpg" alt="user" height="42" className="rounded-circle shadow-sm" />
            <span className="leftbar-user-name">Dominic Keller</span>
          </a>
        </div>

        {/*- Sidemenu */}
        <ul className="metismenu side-nav">

          <li className="side-nav-title side-nav-item">Navigation</li>

          <li className="side-nav-item">
            <a href={HREF_DEFAULT} onClick={handleClick} className="side-nav-link">
              <i className="uil-home-alt"></i>
              <span className="badge badge-info badge-pill float-right">4</span>
              <span> Dashboards </span>
            </a>
            <ul className="side-nav-second-level" >
              <li>
                <a href="dashboard-analytics.html">Analytics</a>
              </li>
              <li>
                <a href="dashboard-crm.html">CRM</a>
              </li>
              <li>
                <a href="index.html">Ecommerce</a>
              </li>
              <li>
                <a href="dashboard-projects.html">Projects</a>
              </li>
            </ul>
          </li>

          <li className="side-nav-title side-nav-item">Apps</li>

          <li className="side-nav-item">
            <a href="apps-calendar.html" className="side-nav-link">
              <i className="uil-calender"></i>
              <span> Calendar </span>
            </a>
          </li>

          <li className="side-nav-item">
            <a href="apps-chat.html" className="side-nav-link">
              <i className="uil-comments-alt"></i>
              <span> Chat </span>
            </a>
          </li>

          <li className="side-nav-item">
            <a href={HREF_DEFAULT} onClick={handleClick} className="side-nav-link">
              <i className="uil-store"></i>
              <span> Ecommerce </span>
              <span className="menu-arrow"></span>
            </a>
            <ul className="side-nav-second-level" >
              <li>
                <a href="apps-ecommerce-products.html">Products</a>
              </li>
              <li>
                <a href="apps-ecommerce-products-details.html">Products Details</a>
              </li>
              <li>
                <a href="apps-ecommerce-orders.html">Orders</a>
              </li>
              <li>
                <a href="apps-ecommerce-orders-details.html">Order Details</a>
              </li>
              <li>
                <a href="apps-ecommerce-customers.html">Customers</a>
              </li>
              <li>
                <a href="apps-ecommerce-shopping-cart.html">Shopping Cart</a>
              </li>
              <li>
                <a href="apps-ecommerce-checkout.html">Checkout</a>
              </li>
              <li>
                <a href="apps-ecommerce-sellers.html">Sellers</a>
              </li>
            </ul>
          </li>

          <li className="side-nav-item">
            <a href={HREF_DEFAULT} onClick={handleClick} className="side-nav-link">
              <i className="uil-envelope"></i>
              <span> Email </span>
              <span className="menu-arrow"></span>
            </a>
            <ul className="side-nav-second-level" >
              <li>
                <a href="apps-email-inbox.html">Inbox</a>
              </li>
              <li>
                <a href="apps-email-read.html">Read Email</a>
              </li>
            </ul>
          </li>

          <li className="side-nav-item">
            <a href={HREF_DEFAULT} onClick={handleClick} className="side-nav-link">
              <i className="uil-briefcase"></i>
              <span> Projects </span>
              <span className="menu-arrow"></span>
            </a>
            <ul className="side-nav-second-level" >
              <li>
                <a href="apps-projects-list.html">List</a>
              </li>
              <li>
                <a href="apps-projects-details.html">Details</a>
              </li>
              <li>
                <a href="apps-projects-gantt.html">Gantt <span className="badge badge-pill badge-dark-lighten font-10 float-right">New</span></a>
              </li>
              <li>
                <a href="apps-projects-add.html">Create Project <span className="badge badge-pill badge-success-lighten font-10 float-right">New</span></a>
              </li>
            </ul>
          </li>

          <li className="side-nav-item">
            <a href="apps-social-feed.html" className="side-nav-link">
              <i className="uil-rss"></i>
              <span> Social Feed </span>
            </a>
          </li>

          <li className="side-nav-item">
            <a href={HREF_DEFAULT} onClick={handleClick} className="side-nav-link">
              <i className="uil-clipboard-alt"></i>
              <span> Tasks </span>
              <span className="menu-arrow"></span>
            </a>
            <ul className="side-nav-second-level" >
              <li>
                <a href="apps-tasks.html">List</a>
              </li>
              <li>
                <a href="apps-tasks-details.html">Details</a>
              </li>
              <li>
                <a href="apps-kanban.html">Kanban Board</a>
              </li>
            </ul>
          </li>

          <li className="side-nav-item">
            <a href="apps-file-manager.html" className="side-nav-link">
              <i className="uil-folder-plus"></i>
              <span> File Manager </span>
            </a>
          </li>

          <li className="side-nav-title side-nav-item">Custom</li>

          <li className="side-nav-item">
            <a href={HREF_DEFAULT} onClick={handleClick} className="side-nav-link">
              <i className="uil-copy-alt"></i>
              <span> Pages </span>
              <span className="menu-arrow"></span>
            </a>
            <ul className="side-nav-second-level" >
              <li>
                <a href="pages-profile.html">Profile</a>
              </li>
              <li>
                <a href="pages-profile-2.html">Profile 2</a>
              </li>
              <li>
                <a href="pages-invoice.html">Invoice</a>
              </li>
              <li>
                <a href="pages-faq.html">FAQ</a>
              </li>
              <li>
                <a href="pages-pricing.html">Pricing</a>
              </li>
              <li>
                <a href="pages-maintenance.html">Maintenance</a>
              </li>
              <li className="side-nav-item">
                <a href={HREF_DEFAULT} onClick={handleClick} >Authentication
                  <span className="menu-arrow"></span>
                </a>
                <ul className="side-nav-third-level" >
                  <li>
                    <a href="pages-login.html">Login</a>
                  </li>
                  <li>
                    <a href="pages-login-2.html">Login 2</a>
                  </li>
                  <li>
                    <a href="pages-register.html">Register</a>
                  </li>
                  <li>
                    <a href="pages-register-2.html">Register 2</a>
                  </li>
                  <li>
                    <a href="pages-logout.html">Logout</a>
                  </li>
                  <li>
                    <a href="pages-logout-2.html">Logout 2</a>
                  </li>
                  <li>
                    <a href="pages-recoverpw.html">Recover Password</a>
                  </li>
                  <li>
                    <a href="pages-recoverpw-2.html">Recover Password 2</a>
                  </li>
                  <li>
                    <a href="pages-lock-screen.html">Lock Screen</a>
                  </li>
                  <li>
                    <a href="pages-lock-screen-2.html">Lock Screen 2</a>
                  </li>
                  <li>
                    <a href="pages-confirm-mail.html">Confirm Mail</a>
                  </li>
                  <li>
                    <a href="pages-confirm-mail-2.html">Confirm Mail 2</a>
                  </li>
                </ul>
              </li>
              <li className="side-nav-item">
                <a href={HREF_DEFAULT} onClick={handleClick} >Error
                  <span className="menu-arrow"></span>
                </a>
                <ul className="side-nav-third-level" >
                  <li>
                    <a href="pages-404.html">Error 404</a>
                  </li>
                  <li>
                    <a href="pages-404-alt.html">Error 404-alt</a>
                  </li>
                  <li>
                    <a href="pages-500.html">Error 500</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="pages-starter.html">Starter Page</a>
              </li>
              <li>
                <a href="pages-preloader.html">With Preloader</a>
              </li>
              <li>
                <a href="pages-timeline.html">Timeline</a>
              </li>
            </ul>
          </li>

          <li className="side-nav-item">
            <a href="landing.html" target="_blank" className="side-nav-link">
              <i className="uil-globe"></i>
              <span className="badge badge-light float-right">New</span>
              <span> Landing </span>
            </a>
          </li>

          <li className="side-nav-item">
            <a href={HREF_DEFAULT} onClick={handleClick} className="side-nav-link">
              <i className="uil-window"></i>
              <span> Layouts </span>
              <span className="menu-arrow"></span>
            </a>
            <ul className="side-nav-second-level" >
              <li>
                <a href="layouts-horizontal.html">Horizontal</a>
              </li>
              <li>
                <a href="layouts-vertical.html">Vertical</a>
              </li>
            </ul>
          </li>

          <li className="side-nav-title side-nav-item mt-1">Components</li>

          <li className="side-nav-item">
            <a href={HREF_DEFAULT} onClick={handleClick} className="side-nav-link">
              <i className="uil-box"></i>
              <span> Base UI </span>
              <span className="menu-arrow"></span>
            </a>
            <ul className="side-nav-second-level" >
              <li>
                <a href="ui-accordions.html">Accordions</a>
              </li>
              <li>
                <a href="ui-alerts.html">Alerts</a>
              </li>
              <li>
                <a href="ui-avatars.html">Avatars</a>
              </li>
              <li>
                <a href="ui-badges.html">Badges</a>
              </li>
              <li>
                <a href="ui-breadcrumb.html">Breadcrumb</a>
              </li>
              <li>
                <a href="ui-buttons.html">Buttons</a>
              </li>
              <li>
                <a href="ui-cards.html">Cards</a>
              </li>
              <li>
                <a href="ui-carousel.html">Carousel</a>
              </li>
              <li>
                <a href="ui-dropdowns.html">Dropdowns</a>
              </li>
              <li>
                <a href="ui-embed-video.html">Embed Video</a>
              </li>
              <li>
                <a href="ui-grid.html">Grid</a>
              </li>
              <li>
                <a href="ui-list-group.html">List Group</a>
              </li>
              <li>
                <a href="ui-media-object.html">Media Object</a>
              </li>
              <li>
                <a href="ui-modals.html">Modals</a>
              </li>
              <li>
                <a href="ui-notifications.html">Notifications</a>
              </li>
              <li>
                <a href="ui-pagination.html">Pagination</a>
              </li>
              <li>
                <a href="ui-popovers.html">Popovers</a>
              </li>
              <li>
                <a href="ui-progress.html">Progress</a>
              </li>
              <li>
                <a href="ui-ribbons.html">Ribbons</a>
              </li>
              <li>
                <a href="ui-spinners.html">Spinners</a>
              </li>
              <li>
                <a href="ui-tabs.html">Tabs</a>
              </li>
              <li>
                <a href="ui-tooltips.html">Tooltips</a>
              </li>
              <li>
                <a href="ui-typography.html">Typography</a>
              </li>
            </ul>
          </li>

          <li className="side-nav-item">
            <a href={HREF_DEFAULT} onClick={handleClick} className="side-nav-link">
              <i className="uil-package"></i>
              <span> Extended UI </span>
              <span className="menu-arrow"></span>
            </a>
            <ul className="side-nav-second-level" >
              <li>
                <a href="extended-dragula.html">Dragula</a>
              </li>
              <li>
                <a href="extended-range-slider.html">Range Slider</a>
              </li>
              <li>
                <a href="extended-ratings.html">Ratings</a>
              </li>
              <li>
                <a href="extended-scrollbar.html">Scrollbar</a>
              </li>
              <li>
                <a href="extended-scrollspy.html">Scrollspy</a>
              </li>
            </ul>
          </li>

          <li className="side-nav-item">
            <a href="widgets.html" className="side-nav-link">
              <i className="uil-layer-group"></i>
              <span> Widgets </span>
            </a>
          </li>

          <li className="side-nav-item">
            <a href={HREF_DEFAULT} onClick={handleClick} className="side-nav-link">
              <i className="uil-streering"></i>
              <span> Icons </span>
              <span className="menu-arrow"></span>
            </a>
            <ul className="side-nav-second-level" >
              <li>
                <a href="icons-dripicons.html">Dripicons</a>
              </li>
              <li>
                <a href="icons-mdi.html">Material Design</a>
              </li>
              <li>
                <a href="icons-unicons.html">Unicons</a>
              </li>
            </ul>
          </li>

          <li className="side-nav-item">
            <a href={HREF_DEFAULT} onClick={handleClick} className="side-nav-link">
              <i className="uil-document-layout-center"></i>
              <span> Forms </span>
              <span className="menu-arrow"></span>
            </a>
            <ul className="side-nav-second-level" >
              <li>
                <a href="form-elements.html">Basic Elements</a>
              </li>
              <li>
                <a href="form-advanced.html">Form Advanced</a>
              </li>
              <li>
                <a href="form-validation.html">Validation</a>
              </li>
              <li>
                <a href="form-wizard.html">Wizard</a>
              </li>
              <li>
                <a href="form-fileuploads.html">File Uploads</a>
              </li>
              <li>
                <a href="form-editors.html">Editors</a>
              </li>
            </ul>
          </li>

          <li className="side-nav-item">
            <a href={HREF_DEFAULT} onClick={handleClick} className="side-nav-link">
              <i className="uil-chart"></i>
              <span> Charts </span>
              <span className="menu-arrow"></span>
            </a>
            <ul className="side-nav-second-level" >
              <li className="side-nav-item">
                <a href={HREF_DEFAULT} onClick={handleClick} >Apex Charts
                  <span className="menu-arrow"></span>
                </a>
                <ul className="side-nav-third-level" >
                  <li>
                    <a href="charts-apex-area.html">Area</a>
                  </li>
                  <li>
                    <a href="charts-apex-bar.html">Bar</a>
                  </li>
                  <li>
                    <a href="charts-apex-bubble.html">Bubble</a>
                  </li>
                  <li>
                    <a href="charts-apex-candlestick.html">Candlestick</a>
                  </li>
                  <li>
                    <a href="charts-apex-column.html">Column</a>
                  </li>
                  <li>
                    <a href="charts-apex-heatmap.html">Heatmap</a>
                  </li>
                  <li>
                    <a href="charts-apex-line.html">Line</a>
                  </li>
                  <li>
                    <a href="charts-apex-mixed.html">Mixed</a>
                  </li>
                  <li>
                    <a href="charts-apex-pie.html">Pie</a>
                  </li>
                  <li>
                    <a href="charts-apex-radar.html">Radar</a>
                  </li>
                  <li>
                    <a href="charts-apex-radialbar.html">RadialBar</a>
                  </li>
                  <li>
                    <a href="charts-apex-scatter.html">Scatter</a>
                  </li>
                  <li>
                    <a href="charts-apex-sparklines.html">Sparklines</a>
                  </li>

                </ul>
              </li>
              <li>
                <a href="charts-brite.html">Britecharts</a>
              </li>
              <li>
                <a href="charts-chartjs.html">Chartjs</a>
              </li>
              <li>
                <a href="charts-sparkline.html">Sparklines</a>
              </li>
            </ul>
          </li>

          <li className="side-nav-item">
            <a href={HREF_DEFAULT} onClick={handleClick} className="side-nav-link">
              <i className="uil-table"></i>
              <span> Tables </span>
              <span className="menu-arrow"></span>
            </a>
            <ul className="side-nav-second-level" >
              <li>
                <a href="tables-basic.html">Basic Tables</a>
              </li>
              <li>
                <a href="tables-datatable.html">Data Tables</a>
              </li>
            </ul>
          </li>

          <li className="side-nav-item">
            <a href={HREF_DEFAULT} onClick={handleClick} className="side-nav-link">
              <i className="uil-location-point"></i>
              <span> Maps </span>
              <span className="menu-arrow"></span>
            </a>
            <ul className="side-nav-second-level" >
              <li>
                <a href="maps-google.html">Google Maps</a>
              </li>
              <li>
                <a href="maps-vector.html">Vector Maps</a>
              </li>
            </ul>
          </li>

          <li className="side-nav-item">
            <a href={HREF_DEFAULT} onClick={handleClick} className="side-nav-link">
              <i className="uil-folder-plus"></i>
              <span> Multi Level </span>
              <span className="menu-arrow"></span>
            </a>
            <ul className="side-nav-second-level" >
              <li className="side-nav-item">
                <a href={HREF_DEFAULT} onClick={handleClick} >Second Level
                  <span className="menu-arrow"></span>
                </a>
                <ul className="side-nav-third-level" >
                  <li>
                    <a href={HREF_DEFAULT} onClick={handleClick}>Item 1</a>
                  </li>
                  <li>
                    <a href={HREF_DEFAULT} onClick={handleClick}>Item 2</a>
                  </li>
                </ul>
              </li>
              <li className="side-nav-item">
                <a href={HREF_DEFAULT} onClick={handleClick} >Third Level
                  <span className="menu-arrow"></span>
                </a>
                <ul className="side-nav-third-level" >
                  <li>
                    <a href={HREF_DEFAULT} onClick={handleClick}>Item 1</a>
                  </li>
                  <li className="side-nav-item">
                    <a href={HREF_DEFAULT} onClick={handleClick} >Item 2
                      <span className="menu-arrow"></span>
                    </a>
                    <ul className="side-nav-forth-level" >
                      <li>
                        <a href={HREF_DEFAULT} onClick={handleClick}>Item 2.1</a>
                      </li>
                      <li>
                        <a href={HREF_DEFAULT} onClick={handleClick}>Item 2.2</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

        </ul>

        {/* Help Box */}
        <div className="help-box text-center">
          <a href={HREF_DEFAULT} onClick={handleClick} className="float-right close-btn text-body">
            <i className="mdi mdi-close"></i>
          </a>
          <img src="assets/images/help-icon.svg" height="90" alt="Helper Icon" />
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