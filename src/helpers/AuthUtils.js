// @flow
// import jwtDecode from 'jwt-decode';
// import { Cookies } from 'react-cookie';

/**
 * Checks if user is authenticated
 */
const isUserAuthenticated = () => {
  const user = getLoggedInUser();
  // console.log(user)
  if (!user) {
    return false;
  }
  // const decoded = jwtDecode(user.token);
  // const currentTime = Date.now() / 1000;
  // if (decoded.exp < currentTime) {
  //     console.warn('access token expired');
  //     return false;
  // } else {
  //     return true;
  // }
  return false;
};

/**
 * Returns the logged in user
 */
const getLoggedInUser = () => {
  // const cookies = new Cookies();
  // const user = cookies.get('user');
  // return user ? (typeof user == 'object' ? user : JSON.parse(user)) : null;
  return {
    id: 1,
    username: 'Denny-master',
    firstName: 'Denny',
    lastName: 'Castillo',
    role: 'Admin',
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImlhdCI6MTU4NzM1NjY0OSwiZXhwIjoxOTAyODg5NDQ5LCJhdWQiOiJjb2RlcnRoZW1lcy5jb20iLCJzdWIiOiJzdXBwb3J0QGNvZGVydGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGVzdCIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJIeXBlciJ9.P27f7JNBF-vOaJFpkn-upfEh3zSprYfyhTOYhijykdI",
  };
};

export { isUserAuthenticated, getLoggedInUser };
