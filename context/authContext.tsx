import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ Children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  const login = (email: string, password: string) => {
    try {
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    try {
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const register = (
    email: string,
    password: string,
    username: string,
    profilePicture: string
  ) => {
    try {
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, register }}
    >
      {Children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);
  if (value === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return value;
};
