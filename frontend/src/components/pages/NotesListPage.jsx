import { React, useState, useEffect } from "react";
import ListItem from "../ListItem";
import axios from "axios";

//Icons
// import { TfiMenu } from "react-icons/tfi";

//GETTING All NOTES FROM THE API
const NotesListPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getAllNotes = async () => {
      try {
        // a proxy url can be set for this
        let response = await axios.get("http://127.0.0.1:8000/api/notes/");
        console.log("DATA:", response.data);
        setNotes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllNotes();
  }, []);

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      
      <div className="notes-list">
        {notes &&
          notes.map((note) => {
            return (
              <ListItem key={note.id} note={note} />
              // each note is passed as props to ListItem.
              // ListItem is being rendered by NotesListPage
            );
          })}
      </div>
    </div>
  );
};

export default NotesListPage;
