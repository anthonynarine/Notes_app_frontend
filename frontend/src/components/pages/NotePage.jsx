import { Link, useParams, useNavigate } from "react-router-dom";
import { TfiBackLeft } from "react-icons/tfi";
import { useState, useEffect } from "react";
import axios from "axios";




const NotePage = () => {
  // id destructured with useParmas passed from the path with the id parameter in apps.js
  let { id } = useParams();
  let navigate = useNavigate();
  let [note, setNote] = useState(null);
  // state to store incoming note from below get request



  useEffect(() => {
    const getNote = async () => {
      try {
        // // a proxy url can be set for this
        if (id === "new") return
        let {data} = await axios.get(`http://127.0.0.1:8000/api/notes/${id}`);
        // id destructured from above used in url via template literal in the url
        setNote(data);
        console.log(data.id)
        console.log(data.body)
      } catch (error) {}
    };
    getNote();
  }, []);

  
  let createNote = async function(){
    try {
      let response = await axios.post("http://127.0.0.1:8000/api/notes/", {
        body: note
      })
      console.log(response)    
    } catch (error) {
      console.log("Error", error)
      
    }
  }

 
  // inside a event handler we set state to the current note requested by the above
  // get request. then send a put request with the note's id and and set the event
  // handler to targert the body of the note. 
  let updateNote = (event) => {
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

  // this handle submit willl be attached to the back button submitting the updated 
  // note when the user clicks back. 
  let handleSubmit = () => {
// if the note is not new and has no body delete it, if the notes id is not new update it. 
//if the note's id is new and the note is not blank create the note. navigate home on create 
    if (id === "new" && !note.body){
      deleteNote()
    }else if (id !=="new"){
      updateNote()
    }else if (id === "" && note !== null){
      createNote()
    }
    navigate("/")
  };
  
  let deleteNote = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/notes/${id}`)
      
    } catch (error) {
      console.log("ERROR", error)
      navigate("/")     
    }
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
{/* if the note id is not equal to new render
the delete button if that's not the case render the done button */}
        {id !== "new" ? (
          <button onClick={deleteNote} >delete</button>
        ) : (
          <button onClick={handleSubmit} >done</button>
        )}
            
      </div>
      <textarea
        onChange={updateNote}
        defaultValue={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
