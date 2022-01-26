import React from "react";
import FontStyle from "./FontStyle/FontStyle";
import Position from "./Position/Position";
import Rotation from "./Rotation/Rotation";
import Scale from "./Scale/Scale";

function LayersEditor() {
    return (
        <div>
            <h1>Layers Editor</h1>
            <FontStyle />
            <br />
            <Rotation />
            <br />
            <Scale />
            <br />
            <Position />
        </div>
    );
}

export default LayersEditor;