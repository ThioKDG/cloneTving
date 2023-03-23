import React from 'react';
import { useParams } from 'react-router-dom';

function Search(props) {
    const { name } = useParams();
    return (
        <div>
            <h1 style={{fontSize:'60px',color:'#fff'}}>검색페이지</h1>
        </div>
    );
}

export default Search;