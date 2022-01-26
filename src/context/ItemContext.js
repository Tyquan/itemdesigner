import React from 'react';

const items = {
    tshirt: {
        itemName: "tshirt",
        itemColor: "",
        texts: [],
        layers: []
    }
};

const ItemContext = React.createContext(items.tshirt);

export default ItemContext;