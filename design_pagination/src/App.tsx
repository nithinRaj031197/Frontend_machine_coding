import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    if (data?.products) {
      setProducts(data?.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectedPagination = (currentPage: number) => {
    if (currentPage >= 1 && currentPage <= products?.length / 10 && currentPage != page) setPage(currentPage);
  };

  return (
    <div className="App">
      {products?.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod: any) => (
            <span key={prod.id} className="products__single">
              <img src={prod.thumbnail} alt={prod.title} />
              <span>{prod.title}</span>
            </span>
          ))}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span className={page <= 1 ? "pagination__disable" : ""} onClick={() => selectedPagination(page - 1)}>
            ⬅️
          </span>
          {[...Array(products.length / 10)].map((_, i: number) => {
            return (
              <span
                className={page === i + 1 ? "pagination__selected" : ""}
                key={i + 1}
                onClick={() => selectedPagination(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={page >= products?.length / 10 ? "pagination__disable" : ""}
            onClick={() => selectedPagination(page + 1)}
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
