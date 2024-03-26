import ProductDetails from "@/pages/ProductDetails";
import products from "../../../data/products.json";

const Details = ({ params }) => {
  const exactName = params.productName.replaceAll("%20", " ");
  const selectedProduct = products.products.find(
    (product) => product.title === exactName
  );

  return (
    <>
      <ProductDetails product={selectedProduct} />
    </>
  );
};

export default Details;
