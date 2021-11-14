import React from 'react';
import { IconButton, TextField, Box } from '@mui/material';
import './Add.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { useHistory } from 'react-router-dom';

const Add = () => {
  let obj = [];

  const history = useHistory();
 
  const addItem = (e) => {
    localStorage.setItem(obj[0], obj[1]);
    console.log(obj);
    history.push('/')
  }

  const handleInput = (e) =>{
    const {name,value} = e.currentTarget;
    if (name === 'item') {
      obj[0] = value;
    } else {
      obj[1] = value;
    }
  }
  
  return (
    <div className="App">
      <header id="buttonsToCenter">
          <Box sx={{width:500}}>
            <TextField label="Name of item" margin="normal" required name='item' value={obj[0]} variant="standard" onChange={handleInput}></TextField>
          </Box>
          <Box sx={{width:500}}>
            <TextField label="Expiration data" margin="normal" required name='date' value={obj[1]} variant="standard" onChange={handleInput}></TextField>
          </Box>
          <IconButton onClick={addItem}>
            <AddCircleOutlineRoundedIcon />
          </IconButton>
      </header>
    </div>
  );
 
}


export default Add;