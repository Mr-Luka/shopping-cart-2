export default function Cart() {


  return (
    <div id="cart">
     <p>No items in cart!</p>
      
        <ul id="cart-items">
          

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> (price)</span>
                </div>
                <div className="cart-item-actions">
                  <button>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button >
                    +
                  </button>
                </div>
              </li>
            );
       
        </ul>
    
      <p id="cart-total-price">
        Cart Total: <strong>Total price</strong>
      </p>
    </div>
  );
}
