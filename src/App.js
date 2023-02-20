import { Routes, Route } from 'react-router-dom';
import './assets/style/style.scss';

import Movie from './components/Movie';
import Main from './layout/Main';
import Contents from './components/Contents';
import NotFoundPage from './layout/NotFoundPage';
import Header from './layout/Header';
import MovieTrailer from './components/MovieTrailer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/cont/:id' element={<Contents />} />
        <Route path='/cont/trailer/:id' element={<MovieTrailer />} />
      </Routes>
    </>
  );
}

export default App;
