export default async function signInUser({
  email, password, setShowError, setErrorMessage, navigate,
}) {
  try {
    const input = { email, password };
    const response = await fetch(`${process.env.REACT_APP_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(input),
    });
    const data = await response.json();
    if (response.status !== 200) {
      setShowError(true);
      setErrorMessage(data.message);
    } else {
      window.localStorage.setItem('token', data.token);
      navigate('/landing');
    }
  } catch (err) {
    setShowError(true);
    setErrorMessage('Service unavailable, please try again later!');
  }
}
