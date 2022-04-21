import { Suspense, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Loader from '../../components/Loader';
import authContext from '../../context/AuthContext';

const Logout = () => {
  const { handleAuth } = useContext(authContext);

  useEffect(() => {
    handleAuth();
  });

  return (
    <>
      <Suspense fallback={<Loader />}>
        {/* <Navigate to='/account/login' /> */}
        <Navigate to='/' />
      </Suspense>
    </>)
};
export default Logout;