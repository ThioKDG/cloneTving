import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
/* import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Grid } from "swiper"; */

import './compStyle/contStyle.scss';

function Contents(props) {
   const { id } = useParams();

   const navigate = useNavigate();
   const viewTrailer = (id) => {
      navigate(`/cont/trailer/${id}`); 
   }

   const imageUrl = 'https://image.tmdb.org/t/p/original';
   const key = process.env.REACT_APP_TDMB_KEY;

   const [cont, setCont] = useState(null);
   const [recommend, setRecommend] = useState([]);

   useEffect(() => {
      const getDetail = async() => {
         const contDetail = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=ko-KR`);
         setCont(contDetail.data);
      };
      const getSimilar = async() => {
         const contRecommend = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${key}&language=ko-KR&page=1`)
         setRecommend(contRecommend.data.results);
      };
      getDetail();
      getSimilar();
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
                                    청소년 시청불가
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
               <div className="similarList">
                  { cont &&(
                        <h3 className='similarH3'>{cont.title} 비슷한 장르의 영화들</h3>
                  )}
                  <ul>
                  {recommend && recommend.map((item) => (
                     <li key={item.id}>
                        <img src={imageUrl + item.poster_path} alt={item.title} />
                     </li>
                  ))}
                  </ul>
               </div>
            </article>
         </section>  
      </>
   );
}

export default Contents;