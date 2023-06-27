import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const EditPage = () => {
    const {articleId}=useParams();
    const navigate = useNavigate();
    const [Article, setArticle]=useState({Title:"", Index:""});

    useEffect(()=>{
        axios
        .get(`https://guestbook.jmoomin.com/articles/${articleId}`)
        .then((res)=>{
            setArticle({Title:res.data.title, Index:res.data.body});
            console.log(Article);
        })
        .catch((e)=>{
            console.log(e);
        });
    },[])

    const insertIndex = (e) =>{
        console.log(e);
        setArticle({Title:Article.Title, Index:e.target.value});
    }

    const insertTitle = (e) =>{
        console.log(e);
        setArticle({Title:e.target.value, Index:Article.Index});
    }

    const editArticle = () => {
        axios
            .put(`https://guestbook.jmoomin.com/articles/${articleId}`,{
                title: Article.Title,
                body: Article.Index
            })
            .then((res)=>{
                console.log(res);
                navigate(-2);
            })
            .catch((e)=>{
                console.log(e);
            })
    }

    return (
        <>
            <input name="title" placeholder="제목" onChange={insertTitle} value={Article.Title}></input>
            <br/>
            <textarea name="index" placeholder="본문" onChange={insertIndex} value={Article.Index}></textarea>
            <br/>
            <button onClick={editArticle}>방명록 남기기!</button>
        </>
    );
};

export default EditPage;

