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
                let response = axios.get(`http://127.0.0.1:8000/api/notes/${id}`)
            } catch (error) {
                
            }
        }

    },[]);


    return (
        <div>
        single note {id}
    </div>
  )
};

export default NotePage;
