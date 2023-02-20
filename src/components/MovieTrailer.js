import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import axios from "axios";

import './compStyle/trailerStyle.scss';

function MovieTrailer(props) {
   const key ='028c17a1ddc55dc7822f3f89fb10cd89';
   const youtube = 'https://www.youtube.com/watch?v=';
   const [tube, setTube] = useState([]);

   const {id} = useParams();
   // console.log(trailerId) ;
   useEffect(() => {
      const getTube = async() => {
        const trailer = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=ko-KR`)
        setTube(trailer.data.results[0]);
      //   console.log(trailer);
      }
      getTube();
   },[])
   return (
      <section className="youtubeTrailer">
         <ReactPlayer
            url={youtube + tube.key}
            volume={0}
            controls={false}
            playing={true}
            muted={false}
            loop={false}
            width='100%'
            height='100%'
         ></ReactPlayer>
      </section>
   );
}

export default MovieTrailer;