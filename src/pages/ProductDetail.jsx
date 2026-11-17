
import { useParams } from "react-router-dom";

import useProducts from "../hooks/useProducts";

import ProductImages from "../componenets/product/ProductImages";
import ProductInfo from "../componenets/product/ProductInfo";
import RelatedProducts from "../componenets/product/RelatedProducts";

function ProductDetail() {
  const { id } = useParams();

  const { products, loading, error, refetch } = useProducts();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (loading) {
    return <main className="page-message">Loading product...</main>;
  }

  if (error) {
    return (
      <main className="page-message">
        <p>{error}</p>
        <button onClick={refetch}>Try Again</button>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="page-message">
        <h2>Product Not Found</h2>
        <p>This product does not exist.</p>
      </main>
    );
  }

  return (
    <main className="product-detail-page">
      <div className="product-detail">
        <ProductImages product={product} />
        <ProductInfo product={product} />
      </div>

      <RelatedProducts
        products={products}
        currentProductId={product.id}
        category={product.category}
      />
    </main>
  );
}

export default ProductDetail;
