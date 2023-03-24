import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './layStyles/headStyle.scss';

function Header() {
   const key = process.env.REACT_APP_TDMB_KEY;
   const [navi, setNavi] = useState(false);
   const [btnOn, setBtnOn] = useState(false);
   const [search, setSearch] = useState([]);
   const [movieName, setMovieName] = useState('');
   
   const navigate = useNavigate();
   
   /* const getSearch = useCallback(async () => {
      const searchPage = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=ko-KR&query=${movieName}page=1&include_adult=false`
      );
      setSearch(searchPage.data.results);
    }, [key, movieName]); */
    
   useEffect(() => {
      const scrollHandler = () => {
         window.scrollY >= 100 ? setNavi(true) : setNavi(false)   ;
      }
      window.addEventListener('scroll', scrollHandler);
      
      
      return () => window.removeEventListener('scroll', scrollHandler);
      
   }, []);
   const changeHandler = async () => {
      if (movieName === '') {
        alert('검색어를 입력해 주세요.')
        return;
      }
      try {
        /* const searchPage = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=ko-KR&query=${movieName}&page=1&include_adult=false`
        );
        setSearch(searchPage.data.results); */
        navigate(`/search/${movieName}`);
        setBtnOn(false);
        
      } catch (error) {
        console.error(error);
      }
   };
   const changeInputHandler = (e) => {
      const { value } = e.target;
      setMovieName(value);
   }
    
   /* console.log(search);
   console.log(movieName); */
   return (
      <header>
         <nav className={navi ? 'navWrapper scrolled' : 'navWrapper'}>
            <h1 className='h1Logo'>
               <Link to='/'>
                  <span className='hiddenWord'>로고</span>
               </Link>
            </h1>
            <p className='searchBtn' onClick={() => {btnOn ? setBtnOn(false) : setBtnOn(true)}}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#fff'>
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
               </svg>
            </p>
         </nav>
         <section className={btnOn ? 'searchArea on' : 'searchArea'}>
            <div className="boxWrapper">
               <p className='pTitle'>영화 제목으로 검색해보세요</p>
               <div className='search'>
                  <input className='inputSearch' onChange={changeInputHandler} value={movieName} type="text" placeholder='제목입력...'/>
                  <button onClick={changeHandler}>검색</button>
               </div>
            </div>
         </section>
      </header>
   );
}

export default Header;