import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SingInCredentials {
  email: string;
  password: string;
}

interface AuthContextState {
  name: string;
  singIn(credentials: SingInCredentials): Promise<void>;
}

export const AuthContext = createContext({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const singIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Ruan', singIn }}>
      {children}
    </AuthContext.Provider>
  );
};
