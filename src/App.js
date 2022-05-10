import RoutesAll from './routes/RoutesAll';

import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <RoutesAll algo={'algo'} />
    </AuthProvider>
  );
};
export default App;