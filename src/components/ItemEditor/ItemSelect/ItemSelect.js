import React, { useContext } from "react";
import ItemContext from "../../../context/ItemContext";



function ItemSelect() {
    const itemContext = useContext(ItemContext);
    
    function chooseItem(e) {
        e.preventDefault();
    }
    return (
        <form className="form">
            <label>Select Item</label>
            <select value={itemContext.itemName} onChange={(e) => { chooseItem(e)}} className="form-control" name="itemName">
                <option value="">Choose Item</option>
                <option value="tshirt">Men's T-Shirt</option>
            </select>
        </form>
    );
}

export default ItemSelect;