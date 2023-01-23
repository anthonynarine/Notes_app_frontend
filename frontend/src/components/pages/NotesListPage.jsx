import {React, useState, useEffect} from 'react'
import axios from "axios";

//GETTING All NOTES FROM THE API
const NotesListPage = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {

    const getAllNotes = async () => {
        try {
            let response = await axios.get("http://127.0.0.1:8000/api/notes/");
            console.log("DATA:", response.data)
            setNotes(response.data)

        } catch (error) {
            console.log(error)
        }
    }       
    getAllNotes();      
    }, []);

        
    return (
    <div className="notes-list">
        {notes && notes.map((note) => {
            return(
                <h3 key={note.id} >{note.body}</h3>
            )
        })}
        
    </div>)
};


    export default NotesListPage;
