import {useRef, useImperativeHandle, forwardRef} from 'react';
import {createPortal} from 'react-dom'
import Cart from './Cart';

const CartModal = forwardRef( function Modal({ 
  title, onUpdateItemQuantity, actions, cartItems}, ref) {
  const modal = useRef();

  useImperativeHandle(ref, ()=> {
    return {
      open(){
        modal.current.showModal();
      }
    }
  })

  return createPortal(
    <dialog id="modal" ref={modal}>
      <h2>{title}</h2>
      <Cart 
        onUpdateItemQuantity={onUpdateItemQuantity}
        />
      <form method="dialog" id="modal-actions">
      {actions}
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default CartModal;


