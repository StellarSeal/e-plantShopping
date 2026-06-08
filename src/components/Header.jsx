import { Leaf, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartTotalQuantity } from "../features/CartSlice.jsx";

function Header() {
  const totalCartQuantity = useSelector(selectCartTotalQuantity);

  return (
    <header className="site-header">
      <NavLink to="/" className="header-brand" aria-label="Paradise Nursery home">
        <Leaf aria-hidden="true" size={30} />
        <span>Paradise Nursery</span>
      </NavLink>

      <nav className="header-navigation" aria-label="Primary navigation">
        <NavLink to="/" className="navigation-link">
          Home
        </NavLink>
        <NavLink to="/plants" className="navigation-link">
          Plants
        </NavLink>
        <NavLink to="/cart" className="cart-navigation-link">
          <ShoppingCart aria-hidden="true" size={24} />
          <span>Cart</span>
          <span className="cart-quantity-badge">{totalCartQuantity}</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
