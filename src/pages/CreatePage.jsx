import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CreatePage = () => {
    const {ownerId}=useParams();
    const navigate=useNavigate();
    const [newArticle,setNewArticle]=useState([{Title:"",Index:""}]);

    const insertIndex = (e) =>{
        console.log(e);
        setNewArticle({Title:newArticle.Title, Index:e.target.value});
    }

    const insertTitle = (e) =>{
        console.log(e);
        setNewArticle({Title:e.target.value, Index:newArticle.Index});
    }

    const updateNewArticle = () =>{
        axios
            .post(`https://guestbook.jmoomin.com/${ownerId}/articles`,{
                title: newArticle.Title,
                body: newArticle.Index
            })
            .then(()=>{
                navigate(-1);
            })
            .catch((e)=>{
                alert(e);
            });
    }

    return (
        <>
            <h2>{ownerId}님에게 방명록 남기기</h2>
            <input name="title" placeholder="제목" onChange={insertTitle} value={newArticle.Title}></input>
            <br/>
            <textarea name="index" placeholder="본문" onChange={insertIndex} value={newArticle.Index}></textarea>
            <br/>
            <button onClick={updateNewArticle}>방명록 남기기!</button>
        </>
    );
};

export default CreatePage;