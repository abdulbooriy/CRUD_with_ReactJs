import React, { useEffect, useState } from "react";
import { api } from "../../api/index";

const Card = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally();
  }, []);

  return (
    <div>
      <div>
        <div className="container mx-auto">
          <div className="flex gap-10 justify-center items-center mt-32 flex-wrap mb-10">
            {products?.data?.map((product) => (
              <div
                key={product.id}
                className="w-[350px] bg-[#FFFFFF] py-2.5 px-2.5 rounded-2xl font-[Inter] shadow-[0px_0px_19px_-4px_rgba(0,_0,_0,_0.8)]">
                <div>
                  <img
                    className="w-full h-[250px] object-cover rounded-2xl"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="pt-3 text-center flex flex-col gap-2 text-[#282938] justify-center items-center">
                  <h1 className="text-4xl font-medium">{product.name}</h1>
                  <p className="opacity-70 text-[18px]">
                    {product.description}
                  </p>
                  <strong className="text-[20px]">{product.price} USD</strong>
                  <h3 className="text-[18px] font-bold">
                    <span className="text-[20px] font-medium">
                      CategoryId:{" "}
                    </span>
                    {product.categoryId}
                  </h3>
                  <div className="w-full flex gap-2.5 text-white text-[20px] font-medium font-[Inter]">
                    <button className="w-1/2 h-12 bg-[green] cursor-pointer rounded-3xl mt-3 hover:bg-green-900">
                      <a href="#">
                        {" "}
                        <span>Edit</span>
                      </a>
                    </button>
                    <button className="w-1/2 h-12 bg-blue-600 cursor-pointer rounded-3xl mt-3 hover:bg-blue-800">
                      <a href="#">
                        {" "}
                        <span>Delete</span>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
