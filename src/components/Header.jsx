import {useRef} from 'react';
import CartModal from './CartModal.jsx';

export default function Header({cart, onUpdateItemQuantity}) {
  const modal = useRef();

  const cartQuantity = cart.items.length;

  function handleOpenModal(){
    modal.current.open();
  }

  return (
    <>
      <CartModal 
        ref={modal}
        cartItems={cart.items}
        onUpdateItemQuantity={onUpdateItemQuantity}
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
