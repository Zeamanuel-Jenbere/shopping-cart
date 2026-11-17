
function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  products,
}) {
  function getCategoryCount(category) {
    if (category === "all") {
      return products.length;
    }

    return products.filter(
      (product) => product.category === category
    ).length;
  }

  return (
    <div className="category-filter">
      <h3>Categories</h3>

      <button
        className={selectedCategory === "all" ? "active" : ""}
        onClick={() => onCategoryChange("all")}
      >
        All Products ({getCategoryCount("all")})
      </button>

      {categories.map((category) => (
        <button
          key={category}
          className={
            selectedCategory === category ? "active" : ""
          }
          onClick={() => onCategoryChange(category)}
        >
          {category} ({getCategoryCount(category)})
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
