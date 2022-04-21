import { Suspense } from 'react';
import Loader from '../components/Loader';

const AuthLayout = ({ children }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);

export default AuthLayout;