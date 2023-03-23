import { Routes, Route } from 'react-router-dom';
import './assets/style/style.scss';

import Movie from './components/Movie';
import Main from './layout/Main';
import Contents from './components/Contents';
import NotFoundPage from './layout/NotFoundPage';
import MainLayout from './layout/MainLayout';
import MovieTrailer from './components/MovieTrailer';
import Search from './components/Search';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Main />} />
          <Route path='/cont/:id' element={<Contents />} />
          <Route path='/search/:name' element={<Search />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/cont/trailer/:id' element={<MovieTrailer />} />
      </Routes>
    </>
  );
}

export default App;
