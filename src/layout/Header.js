import { Link } from 'react-router-dom';

import './layStyles/headStyle.scss';

function Header() {
   return (
      <header>
         <nav className='navWrapper'>
            <h1 className='h1Logo'>
               <span className='hiddenWord'>로고</span>
            </h1>
            <ul className='navList'>
               <li>
                  <Link to='/'>실시간</Link>
               </li>
               <li>
                  <Link to='/'>tv프로그램</Link>
               </li>
               <li>
                  <Link to='/'>영화</Link>
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;