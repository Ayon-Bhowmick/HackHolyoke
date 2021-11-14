import React, {useEffect, useState, Text} from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import './MainList.css';

const MainList = () => {
    const daysRemaining = (purchaseDate) => {
            const arr = purchaseDate.split("/");
            const exp = new Date(arr[2], arr[0], arr[1]);
            const now = new Date();
            const difTime = exp.getTime() - now.getTime();
            return Math.round(difTime / (1000 * 60 * 60 * 24));
    }

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

    const test = () => {
        localStorage.setItem("milk", "03/21/2021");
        localStorage.setItem("juice", "05/21/2020");
        localStorage.setItem("cheese", "12/15/2020");
        localStorage.setItem("yogurt", "07/13/2021");
        localStorage.setItem("ice cream", "11/12/2021");
        document.cookie = "popup=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        window.location.reload(false)
    }

    return(
        <div>
            <IconButton onClick={test}>
                <AddCircleRoundedIcon />
            </IconButton>
            <div>
                {list.map((x) => {
                    return (
                        <Box sx={{ flexGrow: 1 }}>
                            <AppBar position="static">
                                <Toolbar>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        {x.name}
                                    </Typography>
                                    <Typography variant="h6" component="div" sx={{flexGrow: 1, color: '#afafff'}}>
                                        {x.difDay} {(x.difDay < 0) ? <div><h6>Throw away</h6></div>:<div><h6>days before spoiled</h6></div>}
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