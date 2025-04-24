import {useRef} from 'react';
import CartModal from './CartModal.jsx';

import { CartContext } from '../store/shopping-cart-context.jsx';
import {useContext} from 'react';

export default function Header() {
  const modal = useRef();
  const {items} = useContext(CartContext)

  const cartQuantity = items.length;

  function handleOpenModal(){
    modal.current.open();
  }

  let modalAction = <button>Close</button>

  if(cartQuantity > 0) {
    modalAction = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    )
  }

  return (
    <>
      <CartModal 
        ref={modal}
        actions={modalAction}
        title='Your Cart'
      />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenModal}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
