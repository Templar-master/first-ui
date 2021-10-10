// import Starter from './Starter';
import Routes from './routes/Routes';

import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Routes algo={'algo'} />
    </AuthProvider>
  );
};
export default App;