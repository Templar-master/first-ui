import { Suspense, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import authContext from '../../context/AuthContext';

const Logout = () => {
  const { handleAuth } = useContext(authContext);

  useEffect(()=>{
    handleAuth();
  });
  
  return (
    <>
      <Suspense fallback={<div>LOADING</div>}>
        <Navigate to='/account/login' />
      </Suspense>
    </>)
};
export default Logout;