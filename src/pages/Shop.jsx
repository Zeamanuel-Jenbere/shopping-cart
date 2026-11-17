
import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import useProducts from "../hooks/useProducts";
import useCategories from "../hooks/useCategories";

import ProductGrid from "../componenets/product/ProductGrid";
import CategoryFilter from "../componenets/shop/CategoryFilter";
import SearchBar from "../componenets/shop/SearchBar";
import SortSelect from "../componenets/shop/SortSelect";

function Shop() {
  const location = useLocation();

  const { products, loading, error, refetch } = useProducts();
  const { categories } = useCategories();

  const [selectedCategory, setSelectedCategory] = useState(
    location.state?.selectedCategory || "all"
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    result = result.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    switch (sortOption) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "name":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "rating":
        result.sort(
          (a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0)
        );
        break;

      default:
        break;
    }

    return result;
  }, [products, selectedCategory, searchTerm, sortOption]);

  return (
    <main className="shop-page">
      <h1>Our Shop</h1>
      <p>Discover products you will love.</p>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <SortSelect
        sortOption={sortOption}
        onSortChange={setSortOption}
      />

      <div className="shop-layout">
        <aside>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            products={products}
          />
        </aside>

        <section className="shop-products">
          <h2>
            {loading
              ? "Loading products..."
              : `${filteredProducts.length} Products`}
          </h2>

          {error ? (
            <div className="error-message">
              <p>{error}</p>
              <button onClick={refetch}>Try Again</button>
            </div>
          ) : (
            <ProductGrid
              products={filteredProducts}
              loading={loading}
            />
          )}
        </section>
      </div>
    </main>
  );
}

export default Shop;
