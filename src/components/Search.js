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
                        <h2 className='resultH2'>{name} &#40;으&#41;로 검색한 영화들입니다.</h2>
                    </div>
                    <div className="resultArea">
                        <ul className='areaList'>
                            { searchResult.lenght > 0 ? (<li><h3 className='noResult'>검색하신 결과의 내용이 없습니다.</h3></li>) : (
                                searchResult.map((item) => (
                                    <li key={item.id} onClick={() => {navigation(`/cont/${item.id}`)}}>
                                        <div className='posterWrapper'>
                                            <img src={ imageUrl + item.poster_path } alt={item.name} />
                                        </div>
                                        <h3 className='resultH3'>{(item.title.length >= 18) ? `${item.title.slice(0,15)} ...` : `${item.title}` }</h3>
                                    </li>
                                ))
                                )
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Search;