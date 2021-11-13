import './Popup.css'
import React from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}><CloseRoundedIcon/></span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;