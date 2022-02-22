import React, { useContext} from "react";
import ItemContext from "../../../context/ItemContext";

function ItemSelect() {
    const {dispatch} = useContext(ItemContext);

    function chooseItem(e) {
        e.preventDefault();
        const itemName = e.target.value;
        dispatch({ type: "CHANGE_ITEM", itemName})
    }
    return (
        <form className="form">
            <label>Select Item</label>
            <select onChange={(e) => { chooseItem(e)}} className="form-control" name="itemName">
                <option value="">Choose Item</option>
                <option value="tshirt">Men's T-Shirt</option>
            </select>
        </form>
    );
}

export default ItemSelect;