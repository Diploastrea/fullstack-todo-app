import jwtDecode from 'jwt-decode';
import { createContext, useState } from 'react';

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const token = window.localStorage.getItem('token');
  let decoded = null;
  if (token) decoded = jwtDecode(token);
  const [user] = useState(decoded ?? null);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}
