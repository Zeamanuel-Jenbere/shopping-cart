
import HeroBanner from "../componenets/home/HeroBanner";
import CategoryGrid from "../componenets/home/CategoryGrid";
import FeaturedProducts from "../componenets/home/FeaturedProducts";
import useProducts from "../hooks/useProducts";
import useCategories from "../hooks/useCategories";

function Home() {
  const {
    products,
    loading,
    error,
    refetch,
  } = useProducts();

  const { categories } = useCategories();

  return (
    <main className="home-page">
      <HeroBanner />

      <CategoryGrid categories={categories} />

      <section className="home-featured">
        {error ? (
          <div className="error-message">
            <p>{error}</p>
            <button onClick={refetch}>Try Again</button>
          </div>
        ) : (
          <FeaturedProducts
            products={products}
            loading={loading}
          />
        )}
      </section>
    </main>
  );
}

export default Home;
