import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import { Login } from './pages/Login/Login';
import { Characters } from './pages/Characters/Characters';
import { Comics } from './pages/Comics/Comics';
import { Movies } from './pages/Movies/Movies';

export const App = () => {
  return (
    <>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/personagens" element={<Characters />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/hqs" element={<Comics />} />
      </Routes>
    </>
  );
}
