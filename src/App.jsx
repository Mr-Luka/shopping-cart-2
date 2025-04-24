import {useState} from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';

import { DUMMY_PRODUCTS } from './dummy-products.js';


function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  function handleAddItemToCart(id){
    setShoppingCart(prevCart => {
      const updatedItems = [...prevCart.items];

      const updatedItemIndex = updatedItems.findIndex(item => item.id === id);
      const existingCartItem = updatedItems[updatedItemIndex];

      if(existingCartItem){
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1
        }
        updatedItems[existingCartItem] = updatedItem; 
      } else {
        const product = DUMMY_PRODUCTS.find(product => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1
        });
      }
      return {
        items: updatedItems,
      }
    })
  }

  function handleUpdateCartItemQuantity(){

  }

  return (
    <>
      <Header
        cart={shoppingCart}
        onUpdateItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop
        addItemToCart={handleAddItemToCart}
       />
    </>
  );
}

export default App;
