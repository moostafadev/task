import { fetchProducts } from "@/api/products";
import MainInput from "@/components/MainInput";
import { IProduct } from "@/interfaces";
import Link from "next/link";
import React from "react";

interface PageProps {
  params: { q: string };
}

const Page = async ({ params }: PageProps) => {
  const data = await fetchProducts(
    `https://dummyjson.com/products/search?q=${params.q.split("%3D")[1]}`
  );

  const products: IProduct[] = data.products;

  return (
    <section>
      <div className="bg-main text-white py-14">
        <div className="container">
          <div className="text-white">
            <h1 className="text-[28px] font-bold text-center mb-8">
              Hi there, need some help?
            </h1>
            <MainInput valueSearch={params.q.split("%3D")[1]} />
          </div>
        </div>
      </div>
      <div className="py-10 min-h-[calc(100vh-284px)]">
        <div className="container">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-lg font-semibold">
                <span className="text-gray-600 mr-2 text-lg">
                  {products.length
                    ? "Search results for:"
                    : "We couldn't find any articles for:"}
                </span>
                {params.q.split("%3D")[1]}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {products.length
                ? products.map((product) => (
                    <div key={product.id}>
                      <Link
                        href={`/product/${product.id}-${product.title}`}
                        className="block shadow-sm px-4 py-3 border-gray-200 border-[1px] rounded-md hover:border-second duration-300 group hover:text-second"
                      >
                        <div className="flex gap-4 items-center">
                          <div className="flex flex-col gap-2">
                            <h2 className="font-semibold">{product.title}</h2>
                            <p className="text-sm text-gray-500">
                              {product.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
