import React from "react";

function Horizontal() {
    return (
        <form className="form">
            <label>Horizontal Position</label>
            <input type="range" className="form-control" name="layerHorizontal" />
        </form>
    );
}

export default Horizontal;