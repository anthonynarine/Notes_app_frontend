import { Link } from "react-router-dom";
import React from 'react'

//note recieved from props attached to this components being renderedin NotesListPage. 
const ListItem = ({ note }) => {
  return (
    // This code converts all the rendered nots on home into clickable link
    <Link to={`/note/${note.id}`} >
        <div className="notes-list-item" >
        <h3>{note.body}</h3>   
          </div>  
    </Link>
  )
};

export default ListItem;
