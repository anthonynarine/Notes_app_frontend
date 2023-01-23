import React from 'react'
//note recieved from props attached to this components being renderedin NotesListPage. 
const ListItem = ({ note }) => {
  return (
    <div>
        <h1>{note.title}</h1>     
    </div>
  )
};

export default ListItem;
