import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

import { getLoggedInUser } from '../helpers/AuthUtils';

import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Uno = lazy(() => import('../pages/Uno'));
const Login = lazy(() => import('../pages/auth/Login'));
const Logout = lazy(() => import('../pages/auth/Logout'));
const Forbidden = lazy(() => import('../pages/error/Forbidden403'));
// const Home = lazy(() => import('../pages/Home'));
const PublicPage2 = lazy(() => import('../pages/PublicPage2'));
const LandingPage = lazy(() => import('../pages/LandingPage'));

const PrivateRoute = ({ children: Component, roles, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    // not logged in so redirect to login page with the return url
    return <Navigate to={{ pathname: '/account/login', state: { from: 'url return???' } }} />
  }
  const loggedInUser = getLoggedInUser();
  // console.log(loggedInUser);
  // check if route is restricted by role
  if (roles && roles.indexOf(loggedInUser.role) === -1) {
    // role not authorised so redirect to Forbidden Page
    return <Navigate to='/forbidden' />
  }
  // authorised so return component
  return <Component {...rest} />
};

// const AuthRoute = ({ children: Component, ...rest }) => {
//   const { isAuthenticated } = useContext(AuthContext);
//   return !isAuthenticated ? <Component {...rest} /> : <Navigate to={{ pathname: '/', state: { from: 'url return???' } }} />;
// };

// en lugar de PublicRoute podemos solo llamar al mismo componente en routes ok  
const PublicRoute = ({ children: Component, ...rest }) => {
  // return <Component {...rest} />;
  return <Component {...rest} />;
};


// root routes
const rootRoute = {
  path: '/',
  exact: true,
  component: () => <Navigate to='/dashboard/analytics' />,
  route: PrivateRoute,
  // route: PublicRoute,
};

const publicPages = {
  path: '/public/pages',
  exact: true,
  name: 'Public',
  children: [
    {
      path: '/public/page',
      exact: true,
      name: 'page',
      component: Uno,
      route: PublicRoute,
    },
    {
      path: '/public/page2',
      exact: true,
      name: 'page 1',
      component: PublicPage2,
      route: PublicRoute,
    },
  ]
}

// dashboards
const dashboardRoutes = {
  path: '/dashboard',
  exact: true,
  name: 'Dashboards',
  active: true,
  badge: {
    variant: 'success',
    text: '3',
  },
  icon: 'uil-home-alt',
  header: 'Navigation',
  children: [
    {
      path: '/dashboard/analytics',
      exact: true,
      name: 'Analytics',
      component: Uno,
      route: PrivateRoute,
      children: [
        {
          path: '/dashboard/analytics2',
          exact: true,
          name: 'Analytics 2',
          component: Uno,
          route: PrivateRoute,
          children: [
            {
              path: '/dashboard/analytics',
              exact: true,
              name: 'Analytics 3',
              component: Uno,
              // roles: ['Admin'],
              route: PrivateRoute,
            }
          ]
        }
      ],
    },
    {
      path: '/dashboard/crm',
      exact: true,
      name: 'CRM',
      component: Uno,
      route: PrivateRoute,
      roles: ['Tester'],
    },
    {
      path: '/dashboard/ecommerce',
      exact: true,
      name: 'Ecommerce',
      badge: {
        variant: 'success',
        text: '3',
      },
      component: Uno,
      route: PrivateRoute,
    },
    {
      path: '/dashboard/project',
      exact: true,
      name: 'Project',
      component: Uno,
      route: PrivateRoute,
    },
  ],
};

const calendarAppRoutes = {
  path: '/apps/calendar',
  exact: true,
  name: 'Calendar',
  route: PrivateRoute,
  roles: ['Tester'],
  icon: 'uil-calender',
  component: Uno,
  header: 'Apps',
};

const chatAppRoutes = {
  path: '/apps/chat',
  exact: true,
  name: 'Chat',
  route: PrivateRoute,
  roles: ['Admin'],
  icon: 'uil-comments-alt',
  component: Uno,
};

const ecommerceAppRoutes = {
  path: '/apps/ecommerce',
  exact: true,
  name: 'eCommerce',
  route: PrivateRoute,
  roles: ['Admin'],
  icon: 'uil-store',
  children: [
    {
      path: '/apps/ecommerce/products',
      exact: true,
      name: 'Products',
      component: Uno,
      route: PrivateRoute,
      roles: ['Admin', 'Tester'],
    },
    {
      path: '/apps/ecommerce/details',
      exact: true,
      name: 'Product Details',
      component: Uno,
      route: PrivateRoute,
      roles: ['Admin'],
    },
    {
      path: '/apps/ecommerce/orders',
      exact: true,
      name: 'Orders',
      component: Uno,
      route: PrivateRoute,
      roles: ['Admin'],
    },
    {
      path: '/apps/ecommerce/order/details',
      exact: true,
      name: 'Order Details',
      component: Uno,
      route: PrivateRoute,
      roles: ['Admin'],
    },
    {
      path: '/apps/ecommerce/customers',
      exact: true,
      name: 'Customers',
      component: Uno,
      route: PrivateRoute,
      roles: ['Admin'],
    },
    {
      path: '/apps/ecommerce/shopping-cart',
      exact: true,
      name: 'Shopping Cart',
      component: Uno,
      route: PrivateRoute,
      roles: ['Admin'],
    },
    {
      path: '/apps/ecommerce/checkout',
      exact: true,
      name: 'Checkout',
      component: Uno,
      route: PrivateRoute,
      roles: ['Admin'],
    },
    {
      path: '/apps/ecommerce/sellers',
      exact: true,
      name: 'Sellers',
      component: Uno,
      route: PrivateRoute,
      roles: ['Admin'],
    },
  ],
};

const emailAppRoutes = {
  path: '/apps/email',
  exact: true,
  name: 'Email',
  route: PrivateRoute,
  roles: ['Admin'],
  icon: 'uil-envelope',
  children: [
    {
      path: '/apps/email/inbox',
      exact: true,
      name: 'Inbox',
      component: Uno,
      route: PrivateRoute,
    },
    {
      path: '/apps/email/details',
      exact: true,
      name: 'Email Details',
      component: Uno,
      route: PrivateRoute,
    },
  ],
};

const projectAppRoutes = {
  path: '/apps/projects',
  exact: true,
  name: 'Projects',
  route: PrivateRoute,
  roles: ['Admin'],
  icon: 'uil-briefcase',

  children: [
    {
      path: '/apps/projects/list',
      exact: true,
      name: 'List',
      component: Uno,
      route: PrivateRoute,
    },
    {
      path: '/apps/projects/:id/details',
      exact: true,
      name: 'Detail',
      component: Uno,
      route: PrivateRoute,
    },
    {
      path: '/apps/projects/gantt',
      exact: true,
      name: 'Gantt',
      component: Uno,
      route: PrivateRoute,
    },
    {
      path: '/apps/projects/new',
      exact: true,
      name: 'Create Project',
      component: Uno,
      route: PrivateRoute,
    },
  ],
};

const socialAppRoutes = {
  path: '/apps/social',
  exact: true,
  name: 'Social Feed',
  route: PrivateRoute,
  roles: ['Admin'],
  icon: 'uil-rss',
  component: Uno,
};

const taskAppRoutes = {
  path: '/apps/tasks',
  exact: true,
  name: 'Tasks',
  route: PrivateRoute,
  roles: ['Admin'],
  icon: 'uil-clipboard-alt',
  children: [
    {
      path: '/apps/tasks/list',
      exact: true,
      name: 'Task List',
      component: Uno,
      route: PrivateRoute,
    },
    {
      path: '/apps/tasks/kanban',
      exact: true,
      name: 'Kanban',
      component: Uno,
      route: PrivateRoute,
    },
  ],
};

const appRoutes = [
  calendarAppRoutes,
  chatAppRoutes,
  ecommerceAppRoutes,
  emailAppRoutes,
  projectAppRoutes,
  socialAppRoutes,
  taskAppRoutes,
];

// pages
const pageRoutes = {
  path: '/pages',
  exact: true,
  name: 'Pages',
  icon: 'uil-copy-alt',
  header: 'Custom',
  children: [
    {
      path: '/pages/starter',
      exact: true,
      name: 'Starter',
      component: Uno,
      route: PrivateRoute,
    },
    {
      path: '/pages/profile',
      exact: true,
      name: 'Profile',
      component: Uno,
      route: PrivateRoute,
    },
    {
      path: '/pages/invoice',
      exact: true,
      name: 'Invoice',
      component: Uno,
      route: PrivateRoute,
    },
    {
      path: '/pages/faq',
      exact: true,
      name: 'FAQ',
      component: Uno,
      route: PrivateRoute,
    },
    {
      path: '/pages/pricing',
      exact: true,
      name: 'Pricing',
      component: Uno,
      route: PrivateRoute,
    },
    {
      path: '/pages/error-404',
      exact: true,
      name: 'Error - 404',
      component: Uno,
      route: PrivateRoute,
    },
    {
      path: '/pages/error-500',
      exact: true,
      name: 'Error - 500',
      component: Uno,
      route: PrivateRoute,
    },
    {
      path: '/pages/timeline',
      exact: true,
      name: 'Timeline',
      component: Uno,
      route: PrivateRoute,
    },
  ],
};

// auth
const authRoutes = {
  path: '/account',
  exact: true,
  name: 'Auth',
  children: [
    {
      path: '/account/login',
      exact: true,
      name: 'Login',
      component: Login,
      route: Login,
    },
    {
      path: '/account/logout',
      exact: true,
      name: 'Logout',
      component: Logout,
      route: Logout,
    },
    {
      path: '/account/register',
      exact: true,
      name: 'Register',
      component: Uno,
      route: Uno,
    },
    {
      path: '/account/confirm',
      exact: true,
      name: 'Confirm',
      component: Uno,
      route: Uno,
    },
    {
      path: '/account/forget-password',
      exact: true,
      name: 'Forget Password',
      component: Uno,
      route: Uno,
    },
    //Route Forbiden
    {
      path: '/forbidden',
      exact: true,
      name: 'Acceso Denegado',
      component: Forbidden,
      route: PrivateRoute,
    },
  ],
};

// ui
const uiRoutes = {
  path: '/ui',
  name: 'Components',
  icon: 'uil-package',
  header: 'UI Elements',
  children: [
    {
      path: '/ui/base',
      name: 'Base UI',
      children: [
        {
          path: '/ui/accordions',
          name: 'Accordions',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/alerts',
          name: 'Alerts',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/badges',
          name: 'Badges',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/buttons',
          name: 'Buttons',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/cards',
          name: 'Cards',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/carousel',
          name: 'Carousel',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/dropdowns',
          name: 'Dropdowns',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/grid',
          name: 'Grid',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/listgroups',
          name: 'List Groups',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/modals',
          name: 'Modals',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/popovers',
          name: 'Popovers',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/progress',
          name: 'Progress',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/ribbons',
          name: 'Ribbons',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/spinners',
          name: 'Spinners',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/tabs',
          name: 'Tabs',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/toasts',
          name: 'Toasts',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/tooltips',
          name: 'Tooltips',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/typography',
          name: 'Typography',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/widgets',
          name: 'Widgets',
          component: Uno,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: '/ui/extended',
      name: 'Extended UI',
      children: [
        {
          path: '/ui/dragdrop',
          name: 'Drag and Drop',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/rangesliders',
          name: 'Range Sliders',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/ratings',
          name: 'Ratings',
          component: Uno,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: '/ui/icons',
      name: 'Icons',
      children: [
        {
          path: '/ui/icons/dripicons',
          name: 'Dripicons',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/icons/mdi',
          name: 'Material Design',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/icons/unicons',
          name: 'Unicons',
          component: Uno,
          route: Uno,
        },
      ],
    },
    {
      path: '/ui/forms',
      name: 'Forms',
      children: [
        {
          path: '/ui/forms/basic',
          name: 'Basic Elements',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/forms/advanced',
          name: 'Form Advanced',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/forms/validation',
          name: 'Form Validation',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/forms/wizard',
          name: 'Form Wizard',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/forms/upload',
          name: 'File Upload',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/forms/editors',
          name: 'Editors',
          component: Uno,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: '/ui/charts',
      name: 'Charts',
      children: [
        {
          path: '/ui/charts/apex',
          name: 'Apex',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/charts/brite',
          name: 'Brite',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/charts/chartjs',
          name: 'Chartjs',
          component: Uno,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: '/ui/tables',
      name: 'Tables',
      children: [
        {
          path: '/ui/tables/basic',
          name: 'Basic',
          component: Uno,
          route: PrivateRoute,
        },
        {
          path: '/ui/tables/advanced',
          name: 'Advanced',
          component: Uno,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: '/ui/googlemaps',
      name: 'Google Maps',
      component: Uno,
      route: PrivateRoute,
    },
  ],
};

// flatten the list of all nested routes
const flattenRoutes = routes => {
  let flatRoutes = [];

  routes = routes || [];
  routes.forEach(item => {
    flatRoutes.push(item);

    if (typeof item.children !== 'undefined') {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
    }
  });
  return flatRoutes;
};

// All routes
const allRoutes = [rootRoute, publicPages, dashboardRoutes, ...appRoutes, authRoutes, pageRoutes, uiRoutes];

const authProtectedRoutes = [dashboardRoutes, publicPages, ...appRoutes, pageRoutes, uiRoutes];

const allFlattenRoutes = flattenRoutes(allRoutes);

export { allRoutes, authProtectedRoutes, allFlattenRoutes };
