
import { Link } from "react-router-dom";

function CategoryGrid({ categories = [] }) {
  return (
    <section className="category-section">
      <h2>Shop by Category</h2>
      <p>Explore our product categories.</p>

      <div className="category-grid">
        {categories.map((category) => (
          <Link
            to="/shop"
            state={{ selectedCategory: category }}
            className="category-card"
            key={category}
          >
            <h3>
              {category
                .split(" ")
                .map((word) =>
                  word.charAt(0).toUpperCase() + word.slice(1)
                )
                .join(" ")}
            </h3>

            <span>Explore Products →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;
