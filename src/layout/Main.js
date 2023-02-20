import axios from 'axios';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Movie from '../components/Movie';
import './layStyles/mainStyle.scss';
import Footer from './Footer';

export const rowVars = {
   start : {
      opacity: 0,
   },
   visible : { opacity: 1 },
   exit: {
      opacity: 0,
   }
};
function Main() {
   const key ='028c17a1ddc55dc7822f3f89fb10cd89';
   const [program, setProgram] = useState([]);
   const [tvProgram, setTvProgram] = useState([]);
   const [index, setIndex] = useState(0);

   const increaseIndex = () => {
      if(program){
            const total = 5;
            setIndex((prev)=>(prev === total ?  0 : prev + 1));
         }
   };
   const decreaseIndex = () =>{
      if(program){
         const total = 0;
         setIndex((prev) => (prev === total ? 5 : prev - 1));
      }
   }


   const page = 1;
   const imageUrl = 'https://image.tmdb.org/t/p/original';

   useEffect(() => {
      const getProgram = async() =>{
         const programList = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=ko-KR&with_watch_providers=8&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_providers=8&with_watch_monetization_types=flatrate`);
         setProgram(programList.data.results);  
      };
      const getTvList = async() => {
         const tvList = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=ko-KR&sort_by=popularity.desc&page=${page}&timezone=Aisa%2FSeoul&include_null_first_air_dates=false&with_watch_providers=8&with_watch_monetization_types=flatrate&with_status=0&with_type=0`);
         setTvProgram(tvList);
      } 
      console.log(tvProgram);
      getProgram();
      getTvList();
   }, []);
   return (
      <>
      <section className='contentWrapper'>
         <div className='recommendCont'>
            {program.slice(index, index + 1).map((item) => {
               return(
                  <>
                     <motion.img
                        className='recomMovie'
                        variants={rowVars}
                        key={index}
                        initial='start'
                        animate='visible'
                        exit='exit'
                        transition={{ type: "tween", duration:1 }}
                        src={imageUrl + item.backdrop_path}
                     />
                     <h3 className='movieName'>{item.title}</h3>
                  </>
               )
            })}
            <div className='recomSlideBtns'>
               <motion.div
                  className='prevBtn'
                  onClick={decreaseIndex}
               >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                     <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                  </svg>
               </motion.div>
               <motion.div
                  className='nextBtn'
                  onClick={increaseIndex}
               >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                     <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                  </svg>
               </motion.div>
            </div>
         </div>
         <Movie program={program} />
      </section>
      <Footer />
      </>
   );
}

export default Main;