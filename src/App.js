import { Routes, Route } from 'react-router-dom';
import './assets/style/style.scss';

import Movie from './components/Movie';
import Main from './layout/Main';
import NotFoundPage from './layout/NotFoundPage';
import Header from './layout/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
