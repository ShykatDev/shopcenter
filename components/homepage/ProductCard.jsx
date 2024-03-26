import { getDiscountPrice } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { title, description, price, thumbnail, discountPercentage, category } =
    product;

  return (
    <div>
      <div class="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform">
        <Image src={thumbnail} alt="thumbnail" fill objectFit="cover" />
      </div>
      <h2 class="text-sm lg:text-base mt-2">
        <Link class="text-base font-bold" href={`/product/${title}`}>
          {title}
        </Link>
        <span class="text-[#919090]">
          <Link href={`/category/${category}`}>({category})</Link>
        </span>
      </h2>
      <p class="text-[#919090] text-sm ">{description}</p>

      <p class="text-rose-600 text-sm mt-4">
        <span class="text-[#919090] line-through">${price}.00</span> $
        {getDiscountPrice(price, discountPercentage)}
      </p>
    </div>
  );
};

export default ProductCard;
