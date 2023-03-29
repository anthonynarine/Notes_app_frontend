import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//icon
import { TfiBackLeft } from "react-icons/tfi";

const NotePage = () => {
  // id destructured with useParmas passed from the path with the id parameter in apps.js
  let { id } = useParams();
  let navigate = useNavigate();
  let [note, setNote] = useState(null);
  // state to store incoming note from below get request

  useEffect(() => {
    const getNote = async () => {
      try {
        // a proxy url can be set for this
        let {data} = await axios.get(`http://127.0.0.1:8000/api/notes/${id}`);
        // id destructured from above used in url via template literal in the url
        setNote(data);
        console.log(data.body)
      } catch (error) {}
    };
    getNote();
  }, []);

  //on change handler for editing notes.
  const handleNoteUpdate = (event) => {
  // spread operator saying we want to update the note object, specifically the body of the note
    setNote({note});
    try {
      axios.put(`http://127.0.0.1:8000/api/notes/${id}/`,{
        body: event.target.value
      });     
    } catch (error) {
      console.log(error)    
    }    
  };

  let handleSubmit = () => {
    handleNoteUpdate()
    navigate("/")

  }

  return (
    <div className="note">
      <div className="note-header">
        {/* links back to home page */}
        <Link to="/">
          <h3>
            <TfiBackLeft onClick={handleSubmit} />
            <span style={{ fontSize: 20 }}>back</span>
          </h3>
        </Link>
      </div>
      <textarea
        onChange={handleNoteUpdate}
        defaultValue={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
