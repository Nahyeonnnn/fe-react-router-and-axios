import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const ArticlesPage = () => {
    const navigate=useNavigate();
    const {articleId}=useParams();
    // const [Title,setTitle]=useState();
    // const [Index,setIndex]=useState();
    // const [createdAt, setCreatedAt]=useState();
    const [Article, setArticle]=useState({Title:"", Index:"",createdAt:""});

    useEffect(()=>{
        axios
        .get(`https://guestbook.jmoomin.com/articles/${articleId}`)
        .then((res)=>{
            // setTitle(res.data.title);
            // setIndex(res.data.body);
            // setCreatedAt(res.data.createdAt);
            setArticle({Title:res.data.title, Index:res.data.body, createdAt:res.data.createdAt});
            console.log(Article);
        })
        .catch((e)=>{
            console.log(e);
        });
    },[])

    const deleteArticle = () => {
        axios
            .delete(`https://guestbook.jmoomin.com/articles/${articleId}`)
            .then((res)=>{
                console.log(res);
                navigate(-1);
            })
            .catch((e)=>{
                console.log(e);
            })
    }
    
    return (
        <div>
            <h1>{Article.Title}</h1>
            <p>{Article.Index}</p>
            <p>작성일: {Article.createdAt}</p>
            <button onClick={()=>navigate(`/articles/${articleId}/edit`)}>수정하기</button>
            <button onClick={deleteArticle}>제거하기</button>
        </div>
    );
};

export default ArticlesPage;