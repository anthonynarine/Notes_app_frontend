//this function will hold the functionaliy to create a new note

import { Link, useNavigate } from "react-router-dom";
import { SiApachemaven } from "react-icons/si";
import { TfiBackLeft } from "react-icons/tfi";
import axios from "axios";
import { useState } from "react";
import { Button, styled } from "@mui/material";


let DoneButton = styled(Button)({
    backgroundColor: "#2E3235",

    "&:hover": {
        backgroundColor: "#f96d00"
    }
})

function AddNotePage() {
  let navigate = useNavigate();

  const [noteValue, setNoteValue] = useState({
    body: "",
    // titel:"",
  });

  //targets the note body and sets noteValue
  let handleChange = (event) => {
    setNoteValue({ ...noteValue, body: event.target.value });
  };

  //handles form submission and request to backend
  let handleSubmit = (event) => {
    event.preventDefault();

    try {
      axios.post("http://127.0.0.1:8000/api/notes/create/", noteValue);
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };

  return (
    <div className="note">
      <form onSubmit={handleSubmit}>
        <div className="note-header">
          <DoneButton size="small" variant="contained" onClick={handleSubmit}>
            {/* <TfiBackLeft  /> */}
            <span style={{ fontSize: 15 }}>Add</span>
          </DoneButton>
        </div>
        <div>
          <textarea onChange={handleChange}></textarea>
        </div>
      </form>
    </div>
  );
}

export default AddNotePage;
