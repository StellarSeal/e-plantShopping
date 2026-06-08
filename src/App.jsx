import { Link, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs.jsx";
import CartItem from "./components/CartItem.jsx";
import ProductList from "./components/ProductList.jsx";

function LandingPage() {
  return (
    <main className="landing-page">
      <section className="landing-content">
        <p className="eyebrow">Indoor plant boutique</p>
        <h1>Paradise Nursery</h1>
        <AboutUs />
        <Link to="/plants" className="get-started-button">
          Get Started
        </Link>
      </section>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;
