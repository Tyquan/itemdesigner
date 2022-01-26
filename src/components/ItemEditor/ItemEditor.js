import React from "react";
import ItemSelect from "./ItemSelect/ItemSelect";
import ItemColor from './ItemColor/ItemColor';
import ItemLayerText from "./ItemLayerText/ItemLayerText";

function ItemEditor() {
    return (
        <div>
            <h1>Item Editor</h1>
            <ItemSelect />
            <br />
            <ItemColor />
            <br />
            <ItemLayerText />
        </div>
    );
}

export default ItemEditor;