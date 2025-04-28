import {useRef, useContext} from 'react';
import { ShopContext } from '../store/shopping-cart-context.jsx';
import CartModal from './CartModal.jsx';

export default function Header() {
  const modal = useRef();
  const {items} = useContext(ShopContext)
  const cartQuantity = items.length;


  function handleOpenCart(){
    modal.current.open();
  }

  let modalActivity = <button>Cancel</button>
  if(items.length > 0){
    modalActivity = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    )
  }
  
  return (
    <>
      <CartModal title='Your Cart' modalActivity={modalActivity} ref={modal}/>
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCart}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
