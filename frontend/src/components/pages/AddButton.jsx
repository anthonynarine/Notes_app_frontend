
//this function will hold the functionaliy to create a new note

import { Link } from "react-router-dom"
import { SiApachemaven } from "react-icons/si"



function AddButton(){

    return (
        <Link to="/note/new/" className="floating-button">
            <SiApachemaven />
        </Link>
      
    )
} 

export default AddButton