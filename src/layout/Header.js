import { Link } from 'react-router-dom';

import './layStyles/headStyle.scss';

function Header() {
   return (
      <header>
         <nav className='navWrapper'>
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