import React from 'react';

const item = {
    itemName: "tshirt",
    itemColor: {
        r: 16,
        g: 200,
        b: 53
    },
    layers: []
};

const ItemContext = React.createContext(item);

export default ItemContext;