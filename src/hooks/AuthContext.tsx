import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  bio: string;
  login: string;
  avatar_url: string;
  followers_url: string;
  following_url: string;
}

interface ContextData {
  user: User | null;
  signIn(username: string): void;
  signOut(): void;
}

const AuthContext = createContext<ContextData>({} as ContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [userState, setUserState] = useState((): User | null => {
    const storedUser = localStorage.getItem('@GitHub:user');

    if (storedUser) {
      return JSON.parse(storedUser);
    }
    return null;
  });

  const signIn = useCallback(async (username): Promise<void> => {
    const response = await api.get(`/users/${username}`);
    const user = response.data;
    localStorage.setItem('@GitHub:user', JSON.stringify(user));
    setUserState(user);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GitHub:user');
    setUserState(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user: userState, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): ContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('Context must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
