import {useRef, useImperativeHandle, forwardRef} from 'react';
import {createPortal} from 'react-dom';
import Cart from './Cart';

const Modal = forwardRef( function Modal({title, modalActivity}, ref) {
  const modal = useRef();

  useImperativeHandle(ref, ()=> {
    return {
      open(){
        modal.current.showModal();
      }
    }
  });
  

  return createPortal(
    <dialog id="modal" ref={modal}>
      <h2>{title}</h2>
      <Cart/>
      <form method="dialog" id="modal-actions">
      {modalActivity}
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default Modal;


