import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './compStyle/searchStyle.scss';

function Search() {
    const key = process.env.REACT_APP_TDMB_KEY;
    const imageUrl = 'https://image.tmdb.org/t/p/original';
    const navigation = useNavigate();
    
    const { name } = useParams();
    const [ searchResult, setSearchResult ] = useState([]);
    
    console.log(name);
    
    const toDetail = () =>{
        navigation(`/cont/${searchResult.id}`);
    }
    
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
                        <h2 className='resultH2'>{name} 으로 검색한 영화들입니다.</h2>
                    </div>
                    <div className="resultArea">
                        <ul className='areaList'>
                            {searchResult && searchResult.map((item) => (
                                    <li key={item.id} onClick={toDetail()}>
                                        <div className='posterWrapper'>
                                            <img src={ imageUrl + item.poster_path } alt={item.name} />
                                        </div>
                                        <h3 className='resultH3'>{item.title}</h3>
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