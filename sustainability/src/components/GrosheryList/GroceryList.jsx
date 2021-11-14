import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const GroceryList = () => {
    let list = [];

    return(
        <div>
            {list.map((x) =>{
                return(
                    <div>
                        <Box sx={{ flexGrow: 1, margin: 1 }} className={"boxes"} color="red">
                              
                            <AppBar position="static" className="bar" style={{ background: '#F4E8FE' }}>
                                <Toolbar>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textTransform: "uppercase" }} className="name">
                                        {x.name}
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                        </Box>
                    </div>
                );
            })}
            <Box sx={{ flexGrow: 1, margin: 1 }} className={"boxes"} color="red">        
                <AppBar position="static" className="bar" style={{ background: '#F4E8FE' }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textTransform: "uppercase" }} className="name">
                            Add item
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default GroceryList;