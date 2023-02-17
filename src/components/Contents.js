import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './compStyle/contStyle.scss';

function Contents(props) {
   const movieId = useParams();

   const imageUrl = 'https://image.tmdb.org/t/p/original';
   const key ='028c17a1ddc55dc7822f3f89fb10cd89';

   const [cont, setCont] = useState([]);
   useEffect(() => {
      const getDetail = async() =>{
         const contDetail = await axios.get(`https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${key}&language=ko-KR`);
         setCont(contDetail.data);
         console.log(cont) ;
      };
      getDetail();
   }, []);
   return (
      <section className='contWrapper'>
         <div className="filmBlack">
            <img src={imageUrl + cont.backdrop_path} alt={cont.title} />
         </div>
         <article className='contInfo'>
            <div className="infoPlus">
               <h3 className='contTit'>{cont.title}</h3>
               <div className="contTag">
                  {/* <div className="contAge">{cont.}</div> */}
                  <div className="contItem">
                     {/* map으로 돌려주는게 속편할듯 */}
                  </div>
                  <div className="contItem"></div>
                  <div className="contItem"></div>
               </div>
            </div>
         </article>
      </section>
   );
}

export default Contents;