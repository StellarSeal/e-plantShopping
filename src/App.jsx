import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AboutUs from "./components/AboutUs.jsx";
import CartItem from "./components/CartItem.jsx";
import ProductList from "./components/ProductList.jsx";

function LandingPage({ handleGetStartedClick }) {
  return (
    <main className="landing-page background-image">
      <section className="landing-content">
        <p className="eyebrow">Indoor plant boutique</p>
        <h1>Paradise Nursery</h1>
        <AboutUs />
        <button
          type="button"
          className="get-started-button"
          onClick={handleGetStartedClick}
        >
          Get Started
        </button>
      </section>
    </main>
  );
}

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const navigate = useNavigate();

  function handleGetStartedClick() {
    setShowProductList(true);
    navigate("/plants");
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          showProductList ? (
            <ProductList />
          ) : (
            <LandingPage handleGetStartedClick={handleGetStartedClick} />
          )
        }
      />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;
