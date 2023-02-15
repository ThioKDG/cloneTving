import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Grid } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './compStyle/movieStyle.scss';  
import { Link } from "react-router-dom";

function Movie({ program }) {
   const a11ys = {
      a11y : {
         prevSlideMessage : '이전 슬라이드',
         nextSlideMessage : '다음 슬라이드'
      }
   }

   const imageUrl = 'https://image.tmdb.org/t/p/original';

   return (
      <div className='mainSection'>
         <div className='movieArticle'>
            <div className='titleFlex'>
               <h3 className='todaysTit'>오늘은 무슨영화?</h3>
            </div>
            <Swiper className='movieList swiper-initialized swiper-horizontal swiper-pointer-events' {...a11ys}
               slidesPerView={1}
               grid={{
                  rows: 7,
                }}
               centeredSlides={true}
               spaceBetween={10}
               grabCursor={true}
               pagination={{
                 clickable: true,
               }}
               // pagination={true}
               navigation={true}
               modules={[Navigation, A11y, Pagination, Grid]}
            >
               {program.map((item) => (
                  <SwiperSlide key={item.id}>
                     <Link to="/" >
                        <img src={ imageUrl + item.poster_path } alt={item.title} />
                        <h3 className="itemTit">{item.title}</h3>
                     </Link>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
}

export default Movie;