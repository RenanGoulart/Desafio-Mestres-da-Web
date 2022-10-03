import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import { Login } from './pages/Login';
import { Characters } from './pages/Characters';
import { Comics } from './pages/Comics';
import { Movies } from './pages/Movies';
import { UserProvider} from './contexts/authentication';

export const App = () => {
  const Protected = ({children}: {children: JSX.Element}) => {
    if(localStorage.getItem('logged')){
      return children;
    } else {
      return <Navigate to='/' />
    }
  }

  return (
    <>
    <GlobalStyle />
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/personagens" element={<Protected><Characters /></Protected>} />
          <Route path="/filmes" element={<Protected><Movies /></Protected>} />
          <Route path="/hqs" element={<Protected><Comics /></Protected>} />
        </Routes>
      </UserProvider>
    </>
  );
}
