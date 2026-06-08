import { useDispatch, useSelector } from "react-redux";
import Header from "./Header.jsx";
import {
  addPlantToCart,
  selectCartItems,
  selectCartTotalQuantity,
} from "../features/CartSlice.jsx";

const houseplantCategories = [
  {
    categoryName: "Air Purifying Plants",
    categoryDescription: "Low-fuss greenery that freshens rooms and shelves.",
    plants: [
      {
        id: "snake-plant",
        name: "Snake Plant",
        price: 18,
        imageUrl:
          "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "peace-lily",
        name: "Peace Lily",
        price: 22,
        imageUrl:
          "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "spider-plant",
        name: "Spider Plant",
        price: 16,
        imageUrl:
          "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "boston-fern",
        name: "Boston Fern",
        price: 20,
        imageUrl:
          "https://images.unsplash.com/photo-1604762525958-13d1f3bffb02?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "rubber-plant",
        name: "Rubber Plant",
        price: 28,
        imageUrl:
          "https://images.unsplash.com/photo-1600411832986-5a4477b64a1c?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "chinese-evergreen",
        name: "Chinese Evergreen",
        price: 24,
        imageUrl:
          "https://images.unsplash.com/photo-1620127682229-33388276e540?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    categoryName: "Succulents and Cacti",
    categoryDescription: "Sculptural plants for bright windows and busy days.",
    plants: [
      {
        id: "aloe-vera",
        name: "Aloe Vera",
        price: 14,
        imageUrl:
          "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "jade-plant",
        name: "Jade Plant",
        price: 19,
        imageUrl:
          "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "echeveria",
        name: "Echeveria",
        price: 12,
        imageUrl:
          "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "zebra-haworthia",
        name: "Zebra Haworthia",
        price: 15,
        imageUrl:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "golden-barrel-cactus",
        name: "Golden Barrel Cactus",
        price: 26,
        imageUrl:
          "https://images.unsplash.com/photo-1519336056116-bc0f1771dec8?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "burros-tail",
        name: "Burro's Tail",
        price: 21,
        imageUrl:
          "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    categoryName: "Tropical Statement Plants",
    categoryDescription: "Bold leaves that turn any corner into a tiny oasis.",
    plants: [
      {
        id: "monstera-deliciosa",
        name: "Monstera Deliciosa",
        price: 34,
        imageUrl:
          "https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "fiddle-leaf-fig",
        name: "Fiddle Leaf Fig",
        price: 42,
        imageUrl:
          "https://images.unsplash.com/photo-1597055181300-e3633a917c9f?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "bird-of-paradise",
        name: "Bird of Paradise",
        price: 48,
        imageUrl:
          "https://images.unsplash.com/photo-1623912207645-4368e3dd1ec6?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "calathea-orbifolia",
        name: "Calathea Orbifolia",
        price: 31,
        imageUrl:
          "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "philodendron-birkin",
        name: "Philodendron Birkin",
        price: 29,
        imageUrl:
          "https://images.unsplash.com/photo-1616500163491-717d8750e70b?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "money-tree",
        name: "Money Tree",
        price: 36,
        imageUrl:
          "https://images.unsplash.com/photo-1603204077779-bed963ea7d0e?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalCartQuantity = useSelector(selectCartTotalQuantity);

  const cartPlantIds = cartItems.map((cartItem) => cartItem.id);

  function handleAddPlantToCart(plant) {
    dispatch(addPlantToCart(plant));
  }

  return (
    <div className="page-shell">
      <Header />
      <main className="product-page">
        <section className="product-page-heading">
          <p className="eyebrow">Fresh indoor plants</p>
          <h1>Shop Paradise Nursery</h1>
          <p>
            Choose from carefully selected houseplants for cozy bedrooms, bright
            windows, and busy workspaces.
          </p>
          <div className="inline-cart-summary">
            Shopping cart quantity: <strong>{totalCartQuantity}</strong>
          </div>
        </section>

        {houseplantCategories.map((category) => (
          <section className="plant-category-section" key={category.categoryName}>
            <div className="category-heading">
              <h2>{category.categoryName}</h2>
              <p>{category.categoryDescription}</p>
            </div>

            <div className="plant-card-grid">
              {category.plants.map((plant) => {
                const plantAlreadyAdded = cartPlantIds.includes(plant.id);

                return (
                  <article className="plant-card" key={plant.id}>
                    <img
                      className="plant-thumbnail"
                      src={plant.imageUrl}
                      alt={`${plant.name} houseplant`}
                    />
                    <div className="plant-card-body">
                      <h3>{plant.name}</h3>
                      <p className="plant-price">${plant.price.toFixed(2)}</p>
                      <button
                        type="button"
                        className="add-to-cart-button"
                        disabled={plantAlreadyAdded}
                        onClick={() => handleAddPlantToCart(plant)}
                      >
                        {plantAlreadyAdded ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
