import { getDiscountPrice } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductDetails = ({
  product: {
    title,
    description,
    price,
    thumbnail,
    discountPercentage,
    category,
    images,
    rating,
  },
}) => {
  const intRating = Math.round(rating);
  console.log(intRating);
  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
            <Image
              src={thumbnail}
              className="mx-auto object-cover"
              alt=""
              width={480}
              height={500}
            />

            <div className="flex gap-4 mt-4">
              {images.map((img, i) => {
                return (
                  <Image
                    key={i}
                    src={img}
                    className="mx-auto border object-cover"
                    alt={`${title}-image-${i}`}
                    width={100}
                    height={100}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {title}
            </h1>
            <Link
              href={`/category/${category}`}
              className="text-[#919090] my-3"
            >
              {category}
            </Link>
            <div className="mt-3 flex items-center justify-start gap-1">
              {[...Array(intRating)].map((r, i) => {
                return (
                  <Image
                    key={i}
                    src="/svg/star.svg"
                    width={20}
                    height={20}
                    alt="star"
                  />
                );
              })}
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="text-rose-600 opacity-60 line-through">
                  ${price}.00
                </span>
                <span className="font-bold text-2xl">
                  ${getDiscountPrice(price, discountPercentage)}
                </span>
              </p>
            </div>
            <div>
              <p className="leading-7">{description}</p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - ${getDiscountPrice(price, discountPercentage)}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
