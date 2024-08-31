import { fetchProducts } from "@/api/products";
import { BreadcrumbDemo } from "@/components/BreadCrumb";
import MainInput from "@/components/MainInput";
import { IProduct } from "@/interfaces";
import Image from "next/image";
import React from "react";

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page = async ({ params }: PageProps) => {
  const product: IProduct = await fetchProducts(
    `https://dummyjson.com/products/${params.id.split("-")[0]}`
  );
  return (
    <section>
      <div className="bg-main text-white py-10">
        <div className="container">
          <div className="text-white">
            <MainInput />
          </div>
        </div>
      </div>
      <div className="container min-h-[calc(100vh-204px)]">
        <div className="flex justify-between gap-4">
          <div className="py-10 flex flex-col gap-8 w-full">
            <div>
              <BreadcrumbDemo
                title={params.id.split("-")[1]?.replaceAll("%20", " ")}
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="p-3 rounded-md bg-secondAlt w-fit">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl font-bold">{product.title}</h2>
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="text-sm text-gray-500">
                  {product?.reviews?.length} - Review
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
