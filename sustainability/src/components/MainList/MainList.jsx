import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useHistory } from 'react-router-dom';
import './MainList.css';

const MainList = () => {
    const daysRemaining = (purchaseDate) => {
            const arr = purchaseDate.split("/");
            const exp = new Date(arr[2], arr[0] - 1, arr[1]);
            const now = new Date();
            if(purchaseDate === "11/17/2021") {
                console.log(now);
                console.log(exp);
                console.log(arr);
            }
            const difTime = exp.getTime() - now.getTime();
            return Math.round(difTime / (86400000));
    }

    const history = useHistory();

    const [list, setList] = useState(() => {
        let arr = [];
        let keys = Object.keys(localStorage);
        for (let x = 0; x < keys.length; x++) {
            let data = localStorage.getItem(keys[x]);
            let difDay = daysRemaining(data);
            let item = {
                'name' : keys[x],
                'purchaseDate' : data,
                'difDay' : difDay
            }
            arr.push(item);
        }
        return arr;
    });

    const remove = (key) => {
        localStorage.removeItem(key);
        for (let x = 0; x < list.length; x++) {
            if (x.name === key) {
                list.splice(x, 1);
            }
        }
        window.location.reload(false)
    }

    const addItem = () => history.push('/Add');

    const addShopping = () => history.push('/ShoppingList');

    const test = () => {
        document.cookie = "popup=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        window.location.reload(false)
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div>
            <div>
                <IconButton className={"addBtn"} aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                    <AddCircleRoundedIcon/>
                </IconButton>
               <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}>
                    <MenuItem onClick={addItem}>Add item</MenuItem>
                    <MenuItem onClick={addShopping}>Make Shopping List</MenuItem>
                </Menu>
            </div>

            <h4>Your List:</h4>

            <div>
                {list.map((x) => {
                    return (

                         <Box sx={{ flexGrow: 1, margin: 1 }} className={"boxes"} color="red">
                              
                            <AppBar position="static" className="bar" style={{ background: '#F4E8FE' }}>
                                <Toolbar>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textTransform: "uppercase" }} className="name">
                                        {x.name}
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{flexGrow: 1}} 
                                    className={(x.difDay > 3) ? "good" : (x.difDay > 0) ? "almost" : "spoiled"}>
                                        {x.difDay} days
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{flexGrow: 1}} 
                                    className={(x.difDay > 3) ? "good" : (x.difDay > 0) ? "almost" : "spoiled"}>
                                        {(x.difDay > 3) ? <h6 class="days">Good</h6>: (x.difDay > 0) ? <h6 class="days">Spoils soon!</h6> :  <h6 class="throw">Throw/compost</h6>}
                                    </Typography>
                                    <IconButton onClick={() => remove(x.name)}>
                                        <RemoveCircleRoundedIcon />
                                    </IconButton>
                                </Toolbar>
                            </AppBar>
                        </Box>
                    );
                })}
            </div>
        </div>
    );
}

export default MainList;