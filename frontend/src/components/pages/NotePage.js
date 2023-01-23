import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const NotePage = () => {
// id destructured with useParmas passed from the dynamic path in apps.js
    const { id } = useParams();
    const [note, setNote] = useState(null)

    useEffect(() => {
        const getNote = async () => {
            try {
                // a proxy url can be set for this
                let response = axios.get(`http://127.0.0.1:8000/api/notes/${id}`)
                setNote((await response).data)
            } catch (error) {
                
            }
        }
        getNote();
    },[id]);


    return (
        <div>
        <p>{note?.body}</p>
    </div>
  )
};

export default NotePage;
