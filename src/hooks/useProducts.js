
import { useEffect, useState } from "react";

// Store products in memory so we don't fetch them repeatedly.
let productsCache = null;

function useProducts() {
  const [products, setProducts] = useState(productsCache || []);
  const [loading, setLoading] = useState(!productsCache);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    // Use cached products if they are already available.
    if (productsCache) {
      setProducts(productsCache);
      setLoading(false);
      return;
    }

    // Create an AbortController.
    const controller = new AbortController();

    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://fakestoreapi.com/products",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }

        const data = await response.json();

        // Save products in the cache.
        productsCache = data;

        setProducts(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchProducts();

    // Cancel the request when the component unmounts.
    return () => {
      controller.abort();
    };
  }, [retryCount]);

  // Allow the user to try fetching products again.
  function refetch() {
    productsCache = null;
    setRetryCount((previous) => previous + 1);
  }

  return {
    products,
    loading,
    error,
    refetch,
  };
}

export default useProducts;
