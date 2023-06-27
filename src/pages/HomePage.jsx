import React from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
    const { ownerId } = useParams();//useParams으로 불러올 키워드 설정과 리액트 라우터 주소의 키워드 경로를 맞춰줌
    const nevigate = useNavigate();
    const [articles, setArticles]=useState([{}]);

    useEffect(()=>{
        axios
            .get(`https://guestbook.jmoomin.com/${ownerId}/articles`)
            .then((res)=>{
                console.log(res);
                setArticles(res.data);
                console.log(articles);
            })
            .catch((e)=>{
                console.log(e);
            });
    },[ownerId]);
    return (
        <>
            <h2>{ownerId}님의 방명록</h2>
            {articles.length===0?<p>방명록이 없습니다.<br/></p>:
                <ul>
                    {articles.map((eachArticle)=>(
                        <li key={eachArticle.id}><Link to={`/articles/${eachArticle.id}`}>{eachArticle.title}</Link></li>
                    ))}
                </ul>
            }
            <button onClick={()=>nevigate(`/${ownerId}/create`)}>방명록 남기기!</button>
        </>
    );
};

export default HomePage;

