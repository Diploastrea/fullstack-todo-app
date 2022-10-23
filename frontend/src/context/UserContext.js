import jwtDecode from 'jwt-decode';
import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  let user = null;
  (async () => {
    const token = window.localStorage.getItem('token');
    let decoded = null;
    if (token) decoded = jwtDecode(token);
    user = useState(decoded.name ?? null);
  })();

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}
