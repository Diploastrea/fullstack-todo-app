import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';

function App() {
  const loggedIn = window.localStorage.getItem('token');
  return (
    <div>
      {loggedIn ? (
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
