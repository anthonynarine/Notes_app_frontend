import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//icon
import { RxDoubleArrowLeft } from "react-icons/rx";

const NotePage = () => {
  // id destructured with useParmas passed from the dynamic path in apps.js
  const { id } = useParams();
  const [note, setNote] = useState(null);

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
    setNote(...note, event.target.value )
  };

  const updateNote




  return (
    <div className="note">
      <div className="note-header">
        <Link to="/" >
          <h3>
            <RxDoubleArrowLeft />
          </h3>
        </Link>
      </div>
      <textarea onChange={handleNoteChange} defaultValue={note?.body}></textarea>
    </div>
  );
};

export default NotePage;
