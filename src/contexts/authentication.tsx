import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContextProps } from './types';

export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserProvider = ({children}: {children: JSX.Element}) => {
  const navigate = useNavigate();

  function login(user: string, password: string) {
    const userLocalStorage = localStorage.getItem('user');
    const userData = userLocalStorage !== null ? JSON.parse(userLocalStorage) : {};
    
    if(userData.username === user && userData.password === password) {
      localStorage.setItem('logged','1');
      navigate('/personagens');
    } else {
      alert('Usuário ou senha incorretos.')
    }
  }

  function logout() {
    localStorage.removeItem('logged');
    navigate('/');
  }

  return (
    <UserContext.Provider value={{login, logout}}>
      {children}
    </UserContext.Provider>
  )
}
