import jwtDecode from 'jwt-decode';
import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const token = window.localStorage.getItem('token');
  let decoded = null;
  if (token) decoded = jwtDecode(token);
  const user = useState(decoded ?? null);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}
