import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

export interface ContextData {
  user: User | null;
  signIn(username: string): void;
  signOut(): void;
}

export interface User {
  id: string;
  name: string;
  bio: string;
  login: string;
  avatar_url: string;
  followers_url: string;
  following_url: string;
  followers: number;
  following: number;
  public_repos: number;
}

const AuthContext = createContext<ContextData>({} as ContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [userState, setUserState] = useState((): User | null => {
    const storedUser = localStorage.getItem('@Higorhms-GitHub:user');

    if (storedUser) {
      return JSON.parse(storedUser);
    }
    return null;
  });

  const signIn = useCallback(async (username): Promise<void> => {
    const response = await api.get(`/users/${username}`);
    const user = response.data;
    localStorage.setItem('@Higorhms-GitHub:user', JSON.stringify(user));
    setUserState(user);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Higorhms-GitHub:user');
    setUserState(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user: userState, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
