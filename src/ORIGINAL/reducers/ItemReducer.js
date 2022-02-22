const ItemReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_ITEMS':
            return action.items;
        case 'CHANGE_ITEM':
            state._currentValue.itemName = action.itemName;
            return {...state};
        default:
            return state;
    }
};

export default ItemReducer;