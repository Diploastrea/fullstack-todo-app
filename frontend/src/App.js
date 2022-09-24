import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Landing from './pages/Landing';

function App() {
  const loggedIn = window.localStorage.getItem('token');
  return (
    <div>
      {loggedIn ? (
        <Routes>
          <Route path="/landing" element={Landing} />
        </Routes>
      ) : (
        <Homepage />
      )}
    </div>
  );
}

export default App;
