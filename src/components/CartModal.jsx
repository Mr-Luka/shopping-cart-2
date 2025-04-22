
import Cart from './Cart';

export default function Modal() {

  return (
    <dialog id="modal" >
      <h2>Title</h2>
      <Cart />
      <form method="dialog" id="modal-actions">
      </form>
    </dialog>
  );
};


