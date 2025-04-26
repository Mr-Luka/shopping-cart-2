import {useRef} from 'react';
import CartModal from './CartModal.jsx';
export default function Header({shoppingCart}) {
  const modal = useRef();
  const cartQuantity = shoppingCart.items.length;


  function handleOpenCart(){
    modal.current.open();
  }


  
  return (
    <>
      <CartModal ref={modal} />
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
