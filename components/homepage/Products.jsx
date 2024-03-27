import products from "../../data/products.json";
import ProductCard from "./ProductCard";

const Products = () => {
  const allProducts = products.products;

  return (
    <main>
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
          {allProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Products;
