import CategoryPage from "@/pages/CategoryPage";

const Category = ({ params }) => {
  return (
    <div>
      <CategoryPage categoryParam={params.categoryName} />
    </div>
  );
};

export default Category;
