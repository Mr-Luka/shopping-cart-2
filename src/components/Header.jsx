import {useRef} from 'react';
import CartModal from './CartModal.jsx';
export default function Header({ cartItems}) {
  const modal = useRef();
  const cartQuantity = cartItems.items.length;


  function handleOpenCart(){
    modal.current.open();
  }

  let modalActivity = <button>Cancel</button>
  if(cartItems.items.length > 0){
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
