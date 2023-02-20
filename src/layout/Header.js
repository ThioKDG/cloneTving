import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './layStyles/headStyle.scss';

function Header() {
   const [navi, setNavi] = useState(false);
   useEffect(() => {
      const scrollHandler = () => {
         window.scrollY >= 90 ? setNavi(true) : setNavi(false);
      }
      window.addEventListener('scroll', scrollHandler);
      
      return () => window.removeEventListener('scroll', scrollHandler);
   }, [])
   return (
      <header>
         <nav className={navi ? 'navWrapper scrolled' : 'navWrapper'}>
            <h1 className='h1Logo'>
               <Link to='/'>
                  <span className='hiddenWord'>로고</span>
               </Link>
            </h1>
         </nav>
      </header>
   );
}

export default Header;