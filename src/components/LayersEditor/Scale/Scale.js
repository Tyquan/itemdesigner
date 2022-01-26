import React from "react";

function Scale() {
    return (
        <form className="form">
            <label>Scale</label>
            <input type="range" className="form-control" name="layerScale" />
        </form>
    );
}

export default Scale;