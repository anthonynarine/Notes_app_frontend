import { Link } from "react-router-dom";
import React from 'react'

// this function is called in NotePage it converts
// the note body into a link that takes you to that notes'
// page.

//note recieved from props attached to this components being renderedin NotesListPage. 
const ListItem = ({ note }) => {
// const ListItem = (props) => {

  return (

    // consoloe.log(props)
    <Link to={`/note/${note.id}`} >
        <div className="notes-list-item" >
        <h3>{note.body}</h3>   
          </div>  
    </Link>

  )
  
};

export default ListItem;
