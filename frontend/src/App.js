import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import Homepage from './pages/Homepage';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';

function App() {
  const user = useContext(UserContext)[0];

  return (
    <div>
      {user ? (
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      ) : (
        <Homepage />
      )}
    </div>
  );
}

export default App;
