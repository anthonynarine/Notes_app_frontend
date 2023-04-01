import { useNavigate } from 'react-router-dom';
import { Icon, IconButton } from '@mui/material';
import {AddSharp} from "@mui/icons-material"

const Header = () => {

  let navigate = useNavigate();

  let handleClick = ()=> {
    navigate("/add/note")
  }

  return (
    <div className='app-header' >
        <h1>Notes</h1>
        <IconButton onClick={handleClick} ><AddSharp/></IconButton>
      
    </div>
  )
};

export default Header;