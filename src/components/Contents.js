import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../layout/Footer';

import './compStyle/contStyle.scss';

function Contents(props) {
   const { id } = useParams();

   const navigate = useNavigate();
   const viewTrailer = (id) => {
      navigate(`/cont/trailer/${id}`); 
   }

   const imageUrl = 'https://image.tmdb.org/t/p/original';
   const key ='028c17a1ddc55dc7822f3f89fb10cd89';

   const [cont, setCont] = useState(null);

   useEffect(() => {
      const getDetail = async() => {
         const contDetail = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=ko-KR`);
         setCont(contDetail.data);
      };
      getDetail();
   }, [id]);

   return (
      <>
         <section className='contWrapper'>
            {cont && (
               <div className="filmBlack">
                  <img src={imageUrl + cont.backdrop_path} alt={cont.title} />
               </div>
            )}
            <article className='contInfo'>
               <div className="infoPlus">
                  <div className="infoDetail">
                     {cont && (
                        <>
                           <h3 className='contTit'>{cont.title}</h3>
                           <div className="tag tagGenres">
                              {cont.adult ? (
                                 <p className="watchAdult">
                                    18
                                 </p>
                              ) : (
                                 <p className="watchTeenager">
                                    청소년 시청가능
                                 </p>
                              )}
                              <p>{cont.release_date.slice(0, 4)}</p>
                              {cont.genres.map((item) => (
                                 <p key={item.id}>{item.name}</p>
                              ))}
                              <p>{cont.runtime + `분`}</p>
                           </div>
                        </>
                     )}
                     <div className="infoSummary">
                        {cont && (
                           <>
                              <p className='tagLine'><i>{ cont.tagline }</i></p>
                              <p className='overView'>{ cont.overview ? cont.overview : '코멘트 준비중입니다..' }</p>
                           </>
                        )}
                     </div>
                     <div className='infoTrailer'>
                        <div className='whiteBtn' onClick={() => viewTrailer(id)}>
                           <span>예고편 보기</span>
                        </div>
                     </div>
                  </div>
                  <div className="infoPoster">
                     { cont && (
                        <img src={imageUrl + cont.poster_path} alt={cont.title} />
                     )}
                  </div>
               </div>
            </article>
         </section>
         <Footer />
      </>
   );
}

export default Contents;
