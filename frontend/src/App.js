import SignInSide from './components/homepage';

function App() {
  const user = false;
  return (
    <div>
      {user ? (
        <p>Welcome page</p>
      ) : (
        <SignInSide />
      )}
    </div>
  );
}

export default App;
