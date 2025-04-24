import {useRef} from 'react';
import CartModal from './CartModal.jsx';
export default function Header({shoppingCart}) {
  const modal = useRef();
  const cartQuantity = shoppingCart.items.length;


  function handleOpenCart(){
    modal.current.open();
  }

  let modalActivity = <button>Close</button>

  if (cartQuantity > 0 ){
    modalActivity = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    )
  }
  
  return (
    <>
      <CartModal />
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
