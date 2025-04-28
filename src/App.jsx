import {useState} from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx';

import { DUMMY_PRODUCTS } from './dummy-products.js';


function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  })

  function handleAddItemToCart(id){
    setShoppingCart(prevCart => {
      const updatedItems = [...prevCart.items];
      const existingItemIndex = updatedItems.findIndex(product => product.id === id);

      const existingItem = updatedItems[existingItemIndex];

      if(existingItem){
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        }
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find(product => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1
        })
      };
      return {
        items: updatedItems,
      }
    })
  }

  function handleAddOrReduceItems(productId, amount){
    setShoppingCart(prevCart => {
      const updatedItems = [...prevCart.items];
      const updatedItemIndex = updatedItems.findIndex(item => item.id === productId);

      const updatedItem = {
        ...updatedItems[updatedItemIndex]
      };

      updatedItem.quantity += amount;

      if(updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      }
    })
  }

  return (
    <>
      <Header
        cartItems={shoppingCart}
        handleAddOrReduceItems={handleAddOrReduceItems}

      />
      <Shop>
        {DUMMY_PRODUCTS.map(product =>
          <li key={product.id}>
            <Product {...product} addItemToCart={handleAddItemToCart}/>
          </li>
        )}
      </Shop>
    </>
  );
}

export default App;
