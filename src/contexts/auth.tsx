'use client';

import { type ReactNode, createContext, useContext, useState } from 'react';

type User = {
  email?: string;
  name: string;
};

type AuthContextValue = {
  login: (user: User) => void;
  logout: () => void;
  user?: User;
};

const AuthContext = createContext<AuthContextValue>({
  login: () => {},
  logout: () => {},
  user: undefined,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>();

  const login = (user: User) => setUser(user);

  const logout = () => setUser(undefined);

  const value = {
    login,
    logout,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
