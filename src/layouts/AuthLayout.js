import { Suspense } from 'react';

const AuthLayout = ({ children }) => (
  <Suspense fallback={<div>LOADING</div>}>{children}</Suspense>
);

export default AuthLayout;