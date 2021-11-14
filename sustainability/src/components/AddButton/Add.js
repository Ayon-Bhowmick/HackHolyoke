import React from 'react';
import { IconButton, TextField, Box } from '@mui/material';
import './Add.css';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import { useHistory } from 'react-router-dom';

const Add = () => {
  let obj = [];

  const history = useHistory();
 
  const addItem = (e) => {
    localStorage.setItem(obj[0], obj[1]);
    console.log(obj);
    // history.push('/')
  }

  const handleInput = (e) =>{
    console.log(obj);
    const {item,date} = e.currentTarget;
    if (item !== obj[0]) {
      obj[0] = item
    } else {
      obj[1] = date
    }
  }
  
  return (
    <div className="App">
      <header>
          <Box sx={{width:500}}>
            <TextField label="Name of item" margin="normal" required name='item' value={obj[0]} variant="standard" onChange={handleInput}></TextField>
          </Box>
          <Box sx={{width:500}}>
            <TextField label="Expiration data" margin="normal" required name='date' value={obj[1]} variant="standard" onChange={handleInput}></TextField>
          </Box>
          <IconButton onClick={addItem}>
            <RemoveCircleRoundedIcon />
          </IconButton>
      </header>
    </div>
  );
 
}


export default Add;