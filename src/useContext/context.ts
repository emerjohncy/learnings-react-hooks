import { createContext, useContext } from 'react';
import { User } from './UseContext';

// We want user to be accessible anywhere from the tree by creating a context and have it hold our user
// And then wrap everything in dashboard with that context
export const DashboardContext = createContext<User | undefined>(undefined); // needs a default value

// custom hook 
export function useUserContext() {
  const user = useContext(DashboardContext);

  if (user === undefined) {
    throw new Error('useUserContext must be used with a DashboardContext');
  }

  return user;
}