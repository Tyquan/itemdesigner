import React from "react";

function ItemColor() {
    return (
        <form className="form">
            <label>Select Item Color</label>
            <select className="form-control" name="itemColor">
                <option>Choose Item</option>
            </select>
        </form>
    );
}

export default ItemColor;