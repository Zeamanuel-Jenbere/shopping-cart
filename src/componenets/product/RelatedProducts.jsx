
import ProductCard from "./ProductCard";

function RelatedProducts({ products, currentProductId, category }) {
  const relatedProducts = products
    .filter(
      (product) =>
        product.category === category &&
        product.id !== currentProductId
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="related-products">
      <h2>Related Products</h2>

      <div className="product-grid">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
