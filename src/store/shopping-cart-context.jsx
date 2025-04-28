import {createContext, useReducer} from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';


export const ShopContext = createContext({
    items: [],
    addItemsToCart: ()=> {},
    updateItemQuantity: ()=> {}
})

function shoppingCartReducer( state, action) {
    if(action.type === 'ADD_ITEM') {
      const updatedItems = [...state.items];
      const existingItemIndex = updatedItems.findIndex(product => product.id === action.payload.id);

      const existingItem = updatedItems[existingItemIndex];

      if(existingItem){
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        }
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find(product => product.id === action.payload);
        updatedItems.push({
          id: action.payload,
          name: product.title,
          price: product.price,
          quantity: 1
        })
      };
      return {
        items: updatedItems,
      }
    }

    if(action.type === 'UPDATE_ITEM'){
        const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(item => item.id === action.payload.productId);

      const updatedItem = {
        ...updatedItems[updatedItemIndex]
      };

      updatedItem.quantity += action.payload.amount;

      if(updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      }
    }

    return state;
}

export default function CartContextProvider({children}){
    const [shoppingCartState, shoppingCartDispatch] = useReducer(
        shoppingCartReducer, 
        {
        items: []
        }
    )

  function handleAddItemToCart(id){
    shoppingCartDispatch({
        type: 'ADD_ITEM',
        payload: id
    })
  }

  function handleAddOrReduceItems(productId, amount){
    shoppingCartDispatch({
        type: 'UPDATE_ITEM',
        payload: {
            productId,
            amount,
        }
    })
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItemsToCart: handleAddItemToCart,
    updateItemQuantity: handleAddOrReduceItems
  }

  return <ShopContext.Provider value={ctxValue}>
        {children}
    </ShopContext.Provider>
  
}