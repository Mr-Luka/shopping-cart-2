import {createContext} from 'react';


export const ShopContext = createContext({
    items: [],
    addItemsToCart: ()=> {},
    updateItemQuantity: ()=> {}
})