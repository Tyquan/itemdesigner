import React from "react";

function Vertical() {
    return (
        <form className="form">
            <label>Vertical Position</label>
            <input type="range" className="form-control" name="layerVertical" />
        </form>
    );
}

export default Vertical;