import React from "react";
import logo from "../assets/Logo.svg";
import products from "../Data/Products.json";

function Products() {
  return (
    <div className="bg-[rgba(252,248,237,1)] lg:mt-15 mt-8 xl:mt-15 md:mt-10">
      {/* Logo */}
      <div className="flex justify-center">
        <img
          className=" w-32 sm:w-40 md:w-48 lg:w-auto"
          src={logo}
          alt="logo"
        />
      </div>

      {/* Heading */}
      <h1 className="text-[rgba(109,94,71,1)] text-2xl sm:text-3xl md:text-4xl text-center max-w-3xl px-4 mx-auto pt-5 ">
        Enchant and uplift your lifestyle with high-quality aromatic creations
      </h1>

      {/* Products List */}
      <div className="bg-[rgb(252,248,237)] py-12 sm:py-16">
        {/* Products Grid */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {products.map((item) => {
            return (
              <div key={item.id} className="flex flex-col items-center">
                <img
                  src={item.image}
                  alt="product"
                  className="rounded-3xl w-64 sm:w-72 md:w-80 lg:w-[90%] mx-auto hover:scale-103 "
                />
                <div className="mt-4 text-center sm:text-left sm:pl-4 w-full">
                  <p className="text-[rgba(62,57,49,1)] text-sm sm:text-base">
                    {item.name}
                  </p>
                  <h1 className="text-[rgba(109,94,71,1)] text-lg sm:text-xl md:text-2xl font-medium">
                    {item.price} {item.currency}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Link */}
      <div className="text-center pb-16 sm:pb-24">
        <a
          className="text-[rgba(62,57,49,1)] underline hover:opacity-80 transition"
          href="#"
        >
          See all Products
        </a>
      </div>
    </div>
  );
}

export default Products;
