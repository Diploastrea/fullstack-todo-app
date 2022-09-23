import Homepage from './pages/Homepage';

function App() {
  const user = false;
  return (
    <div>
      {user ? (
        <p>Welcome page</p>
      ) : (
        <Homepage />
      )}
    </div>
  );
}

export default App;
