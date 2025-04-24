
export default function Cart() {
  

  return (
    <div id="cart">
     <p>No items in cart!</p>
     
        <ul id="cart-items">    


            {/* return (
              <li key={item.id}>
                <div>
                  <span>name</span>
                  <span> (formattedPrice)</span>
                </div>
                <div className="cart-item-actions">
                  <button>
                    -
                  </button>
                  <span>quantity</span>
                  <button>
                    +
                  </button>
                </div>
              </li>
            ); */}

        </ul>
    
      <p id="cart-total-price">
        Cart Total: <strong>Total price</strong>
      </p>
    </div>
  );
}
