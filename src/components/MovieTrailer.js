import { Link, useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import axios from "axios";

import './compStyle/trailerStyle.scss';

function MovieTrailer(props) {
   const key ='028c17a1ddc55dc7822f3f89fb10cd89';
   const youtube = 'https://www.youtube.com/watch?v=';
   const [tube, setTube] = useState({});

   const {id} = useParams();
   // console.log(trailerId) ;
   const navigate = useNavigate();

   const goBack = () => {
      navigate(-1);
   }
   useEffect(() => {
      const getTube = async() => {
         try{
            const trailer = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=ko-KR`)
            setTube(trailer.data.results[0]);
         }
         catch(error){
            console.log('error');
         }
      // console.log(trailer);
      }
      getTube();
   },[id])
   return (
      <section className="youtubeTrailer">
      {tube ? (
         <>
            <ReactPlayer
               url={youtube + tube.key}
               volume={0.5}
               controls={false}
               playing={true}
               muted={false}
               loop={false}
               width='100%'
               height='100%'
            />
            <div className="nav">
               <span className="toBack" onClick={() => goBack()}>이전으로</span>
            </div>
         </>
      ) : (
         <div className="notFound">
           <p>해당 영화의 트레일러가 존재하지 않습니다.</p>
            <Link to='/' className="goBack">메인페이지로</Link>
         </div>
      )}
   </section>
   );
}

export default MovieTrailer;