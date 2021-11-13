import React, {useEffect, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const MainList = () => {
    // const list = []; 
    const [list, setList] = useState(() => {
        let arr = [];
        let keys = Object.keys(localStorage);
        for (let x = 0; x < keys.length; x++) {
            let data = localStorage.getItem(keys[x]);
            var dataArr = data.split(",");
            let item = {
                'name' : dataArr[0],
                'purchaseDate' : dataArr[1]
            }
            arr.push(item);
        }
        return arr;
    });

    return(
        <div>
            <IconButton>
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
                                        {x.purchaseDate}
                                    </Typography>

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