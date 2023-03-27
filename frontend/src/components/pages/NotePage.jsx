import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//icon
import {TfiBackLeft } from "react-icons/tfi"

const NotePage = () => {

  // id destructured with useParmas passed from the path with the id parameter in apps.js
  let { id } = useParams();
  let [note, setNote] = useState(null);
  // state to store incoming note from below get request

  useEffect(() => {
    const getNote = async () => {
      try {
        // a proxy url can be set for this
        let response = axios.get(`http://127.0.0.1:8000/api/notes/${id}`);
        setNote((await response).data);
      } catch (error) {}
    };
    getNote();
  }, [id]);

  //on change handler for editing notes.
  const handleNoteChange = (event) => {
    setNote({...note, "body": event.target.value })
// spread operator saying we want to update the note object, specifically the body of the note
  };

  // const updateNote

  return (
    <div className="note">
      <div className="note-header">
      {/* links back to home page */}
        <Link to="/" >
          <h3>
            <TfiBackLeft /><span style={{fontSize:20}}>back</span>
          </h3>
        </Link>

      </div>
      <textarea onChange={handleNoteChange} defaultValue={note?.body}></textarea>
    </div>
  );
};

export default NotePage;
