//this function will hold the functionaliy to create a new note

import { Link, useNavigate } from "react-router-dom";
import { SiApachemaven } from "react-icons/si";
import { TfiBackLeft } from "react-icons/tfi";
import axios from "axios";
import { useState } from "react";

function AddNotePage() {
  let navigate = useNavigate();

  const [noteValue, setNoteValue] = useState({
    body: "",
    // titel:"",
  });

  //targets the note body and sets noteValue
  let handleChange = (event) => {
    setNoteValue({...noteValue, body: event.target.value });
  };

  //handles form submission and request to backend
  let handleSubmit = (event) => {
    event.preventDefault();

    try {
      axios.post("http://127.0.0.1:8000/api/notes/create/", noteValue);
    } catch (error) {
      console.log(error);
    }
    navigate("/")
  };

  return (
    <div className="note">
        <form onSubmit={handleSubmit}>
            <div>
                <textarea onChange={handleChange}></textarea>
            </div>
            <button>submit</button>
        </form>

    </div>
  );
}

export default AddNotePage;


