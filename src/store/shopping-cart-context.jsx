import {createContext, useReducer} from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';


export const ShopContext = createContext({
    items: [],
    addItemsToCart: ()=> {},
    updateItemQuantity: ()=> {}
})

function shoppingCartReducer (state, action){
    if(action.type === 'ADD_ITEM') {
    const updatedItems = [...state.items];
      const existingItemIndex = updatedItems.findIndex(product => product.id === action.payload);

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
            items: [],
        });


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




/*
ANOTHER EXAMPLE:
Using useReducer()
Your task is to build a basic counter app that uses React's useReducer() Hook for state management - not the useState() Hook!

To achieve this goal, you should enhance the already existing counterReducer function that can be found right next to the App component (don't remove the export keyword!).

In addition, inside the App component, the useReducer Hook should be used with that reducer function to manage the counter state.

The three <button> elements should be "connected" to the reducer-managed state (i.e., they should trigger state changes), the <p id="counter"> element should output the count value.

Important: The state managed with help of the reducer must be an object of the following shape:



{
  count: 0; // of course, 0 is not static but changes as the different <button>s are clicked
} 


solution: 
import React from 'react';

export function counterReducer(state, action) {
    if(action.type === 'INCREMENT'){
        return {
            count: state.count +1
        }
    } else if (action.type === 'DECREMENT'){
        return {
            count: state.count -1
        }
    } else if (action.type === 'RESET') {
        return {
            count: 0
        }
    }
    
    
    return state;
    
}

function App() {
    const [counterState, counterDispatch] = React.useReducer(
        counterReducer,
        {
        count: 0
        },
    );
    
    
  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={()=> counterDispatch({type: 'INCREMENT'})}>Increment</button>
        <button onClick={()=> counterDispatch({type: 'DECREMENT'})}>Decrement</button>
        <button onClick={()=> counterDispatch({type: 'RESET'})}>Reset</button>
      </p>
      <p id="counter">{counterState.count}</p>
    </div>
  );
}

export default App;
*/