import { Suspense, useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import authContext from '../../context/AuthContext';

const Logout = () => {
  const { handleAuth } = useContext(authContext);

  // useEffect(()=>{
  //   handleAuth();
  // });

  return (
    <>
      <Suspense fallback={<div>LOADING</div>}>
        <Redirect to='/account/login' />
      </Suspense>
    </>)
};
export default Logout;