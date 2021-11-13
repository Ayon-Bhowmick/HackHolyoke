import React, {useEffect} from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const MainList = () => {
    const list = []; 

    const loadList = async () => {
        localStorage.setItem("1", "milk, 05/12/2002");
        localStorage.setItem("2", "cheese, 07/26/2002");

        let keys = Object.keys(localStorage);
            for (let x = 0; x < keys.length; x++) {
            let data = localStorage.getItem(keys[x]);
            var dataArr = data.split(",");
            let item = {
            'name' : dataArr[0],
            'purchaseData' : dataArr[1]
            }
            list.push(item);
            console.log(list);
        } 
    }

    useEffect(() => {
        loadList();
    })

    return(
        <div>
            <IconButton>
                <AddCircleRoundedIcon />
            </IconButton>
        </div>
    );
}

export default MainList;