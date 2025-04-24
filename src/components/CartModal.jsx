import {useRef, useImperativeHandle, forwardRef} from 'react';
import {createPortal} from 'react-dom'
import Cart from './Cart';

const CartModal = forwardRef( function Modal({onUpdateItemQuantity, cartItems}, ref) {
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
      <h2>Title</h2>
      <Cart 
        onUpdateItemQuantity={onUpdateItemQuantity}
        items={cartItems}
        />
      <form method="dialog" id="modal-actions">
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default CartModal;


