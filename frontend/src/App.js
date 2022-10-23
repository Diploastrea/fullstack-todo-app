import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import Homepage from './pages/Homepage';
import Tasks from './pages/Tasks';
import NotFound from './pages/NotFound';

function App() {
  const user = useContext(UserContext)[0];

  return (
    <div>
      {user ? (
        <Routes>
          <Route path="/tasks" element={<Tasks />} />
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
