import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './compStyle/searchStyle.scss';

function Search() {
    const key = process.env.REACT_APP_TDMB_KEY;
    const imageUrl = 'https://image.tmdb.org/t/p/original';
    
    const { name } = useParams();
    const [ searchResult, setSearchResult ] = useState([]);
    
    console.log(name);
    
    useEffect(() => {
        const getResult = async() => {
            const inputResult = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=ko-KR&query=${name}&page=1&include_adult=false`);
            setSearchResult(inputResult.data.results);
        }
        getResult();
    }, [name]);
    console.log(searchResult);
    
    return (
        <>
            <section className='resultBox'>
                <div className="wrapper">
                    <div className='searchArea'>
                        <h2>{}</h2>
                    </div>
                    <div className="resultArea">
                        <ul className='areaList'>
                            {searchResult && searchResult.map((item) => (
                                    <li key={item.id}>
                                        <div>
                                            <img src={ imageUrl + item.poster_path } alt={item.name} />
                                            <h3>{item.name}</h3>
                                        </div>
                                    </li>
                                    
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Search;