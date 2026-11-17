
import ProductGrid from "../product/ProductGrid";

function FeaturedProducts({ products = [], loading = false }) {
  const featured = [...products]
    .sort(
      (a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0)
    )
    .slice(0, 4);

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <p>Discover some of our top-rated products.</p>

      <ProductGrid
        products={featured}
        loading={loading}
      />
    </section>
  );
}

export default FeaturedProducts;
