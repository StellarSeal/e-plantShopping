import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header.jsx";
import {
  decreasePlantQuantity,
  deletePlantFromCart,
  increasePlantQuantity,
  selectCartItems,
  selectCartTotalCost,
  selectCartTotalQuantity,
} from "../features/CartSlice.jsx";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalCartQuantity = useSelector(selectCartTotalQuantity);
  const totalCartCost = useSelector(selectCartTotalCost);

  function handleIncreaseQuantity(plantId) {
    dispatch(increasePlantQuantity(plantId));
  }

  function handleDecreaseQuantity(plantId) {
    dispatch(decreasePlantQuantity(plantId));
  }

  function handleDeletePlant(plantId) {
    dispatch(deletePlantFromCart(plantId));
  }

  function handleCheckoutButtonClick() {
    window.alert("Coming Soon");
  }

  return (
    <div className="page-shell">
      <Header />
      <main className="cart-page">
        <section className="cart-summary-panel">
          <p className="eyebrow">Shopping cart</p>
          <h1>Your Plant Cart</h1>
          <div className="cart-total-row">
            <span>Total number of plants</span>
            <strong>{totalCartQuantity}</strong>
          </div>
          <div className="cart-total-row">
            <span>Total cart amount</span>
            <strong>${totalCartCost.toFixed(2)}</strong>
          </div>
          <div className="cart-actions">
            <Link to="/plants" className="continue-shopping-button">
              Continue Shopping
            </Link>
            <button
              type="button"
              className="checkout-button"
              onClick={handleCheckoutButtonClick}
            >
              Checkout
            </button>
          </div>
        </section>

        <section className="cart-items-section" aria-label="Cart items">
          {cartItems.length === 0 ? (
            <div className="empty-cart-message">
              <h2>Your cart is empty</h2>
              <p>Add a plant from the product listing page to begin your order.</p>
            </div>
          ) : (
            cartItems.map((cartItem) => {
              const itemTotalCost = cartItem.price * cartItem.quantity;

              return (
                <article className="cart-item-card" key={cartItem.id}>
                  <img
                    className="cart-item-thumbnail"
                    src={cartItem.imageUrl}
                    alt={`${cartItem.name} houseplant`}
                  />

                  <div className="cart-item-details">
                    <h2>{cartItem.name}</h2>
                    <p>Unit price: ${cartItem.price.toFixed(2)}</p>
                    <p>Total cost: ${itemTotalCost.toFixed(2)}</p>
                  </div>

                  <div className="quantity-control-group" aria-label="Quantity controls">
                    <button
                      type="button"
                      className="quantity-button"
                      onClick={() => handleDecreaseQuantity(cartItem.id)}
                      aria-label={`Decrease ${cartItem.name} quantity`}
                    >
                      -
                    </button>
                    <span className="quantity-value">{cartItem.quantity}</span>
                    <button
                      type="button"
                      className="quantity-button"
                      onClick={() => handleIncreaseQuantity(cartItem.id)}
                      aria-label={`Increase ${cartItem.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    className="delete-item-button"
                    onClick={() => handleDeletePlant(cartItem.id)}
                  >
                    Delete
                  </button>
                </article>
              );
            })
          )}
        </section>
      </main>
    </div>
  );
}

export default CartItem;
