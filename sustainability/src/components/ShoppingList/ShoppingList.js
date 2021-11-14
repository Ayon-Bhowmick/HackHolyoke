import './ShoppingList.css'
import React from "react";



function ShoppingList() {
    return (
        <div className="ShoppingList">
            <h1 class="font-weight-light">My Shopping List:</h1>
   
            <form id = "datePicker">
                <label for="dt">Date: </label>
                <input name="dt" type="date" />
                <input type="submit" />
            </form>

        </div>
    )
}

export default ShoppingList;
