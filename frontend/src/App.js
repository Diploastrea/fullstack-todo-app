import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import Homepage from './pages/Homepage';
import Tasks from './pages/Tasks';
import NotFound from './pages/NotFound';

function App() {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user[0] ? (
        <Routes>
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<Homepage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
