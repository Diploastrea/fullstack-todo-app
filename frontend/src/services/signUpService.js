export default async function signUpUser({
  name, email, password, setShowError, setErrorMessage, setSignUpSuccessful,
}) {
  try {
    const userDetails = { name, email, password };
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(userDetails),
    });
    const data = await response.json();
    if (response.status !== 201) {
      setShowError(true);
      setErrorMessage(data.message);
    } else {
      setSignUpSuccessful(true);
    }
  } catch (err) {
    setShowError(true);
    setErrorMessage('Service unavailable, please try again later!');
  }
}
