import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function Tasks() {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>{`Welcome ${user[0].name}`}</h1>
      <p>hello</p>
    </>
  );
}
