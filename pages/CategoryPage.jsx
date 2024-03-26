"use client";

import Hero from "@/components/homepage/Hero";
import ProductCard from "@/components/homepage/ProductCard";
import products from "../data/products.json";
import { useState, useEffect } from "react";
import Link from "next/link";

const CategoryPage = ({ categoryParam }) => {
  const [allCategory, setAllCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState(categoryParam);

  useEffect(() => {
    products.products.map((item) => {
      setAllCategory((prev) => [...prev, item.category]);
    });
  }, []);

  const uniqueCategory = [...new Set(allCategory)];

  const selectProducts = products.products.filter(
    (product) => product.category === selectCategory
  );

  const filteredProducts =
    selectCategory === "all" ? products.products : selectProducts;

  return (
    <div>
      <Hero />

      <main>
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
          <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
            <button
              onClick={() => setSelectCategory("")}
              className={`hover:border-b border-black block h-6 box-border mt-4 ${
                categoryParam === "all" ? "border-b font-semibold" : ""
              }`}
            >
              <Link href={`/category/all`}>All</Link>
            </button>
            {uniqueCategory.map((u, i) => {
              return (
                <button
                  key={i}
                  className={`hover:border-b border-black block h-6 box-border mt-5 capitalize ${
                    u === categoryParam ? "border-b font-semibold" : ""
                  }`}
                >
                  <Link href={`/category/${u}`}>{u}</Link>
                </button>
              );
            })}
          </div>

          <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
            {filteredProducts.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CategoryPage;
