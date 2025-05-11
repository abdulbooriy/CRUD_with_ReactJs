import React, { useState } from "react";
import { api } from "../../api";

const Popup = ({ setShowPopUp, onAddProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProducts = {
      name: formData.name,
      price: Number(formData.price),
      description: formData.description,
      image: formData.image,
      category: formData.category,
    };

    api
      .post("/products", newProducts)
      .then((res) => {
        onAddProduct(newProducts);
        setShowPopUp(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div
        onClick={() => setShowPopUp(false)}
        className="w-full h-screen fixed top-0 left-0 bg-black opacity-30"></div>
      <div className="fixed top-1/2 left-1/2 w-[700px] bg-[#1f2937] rounded-[20px] -translate-x-1/2 -translate-y-1/2">
        <div className="w-full flex px-5 py-5 justify-between items-center text-white pb-2.5">
          <h2 className="font-[500] text-[20px] ">Add Products</h2>
          <button
            onClick={() => setShowPopUp(false)}
            className="transition 5.s hover:bg-gray-400 w-10 h-10 text-center rounded-[5px] text-[20px] font-bold">
            x
          </button>
        </div>

        <div className="px-3 pb-5">
          <div className="w-full h-[1px] bg-[#4b5563]"></div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-wrap gap-5 px-5">
          {/* body */}
          <div className="w-full flex gap-5">
            <div className="w-1/2 flex flex-col">
              <label
                className="text-[18px] font-[400] font-[Inter] text-white"
                htmlFor="name">
                <span>Name</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Type Product name here"
                required
                value={formData.name}
                onChange={handleChange}
                className="h-[40px] bg-[#374151] rounded-[5px] border-[1px] border-[#4b5563] indent-2.5 mt-2.5 text-[16px] font-[Inter] focus:outline-2 focus:outline-[dodgerblue] focus:border-none text-white"
              />
            </div>

            <div className="w-1/2 flex flex-col">
              <label
                className="text-[18px] font-[400] font-[Inter] text-white"
                htmlFor="price">
                <span>Price</span>
              </label>
              <input
                id="price"
                name="price"
                type="number"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                className="h-[40px] bg-[#374151] rounded-[5px] border-[1px] border-[#4b5563] indent-2.5 mt-2.5 text-[16px] font-[Inter] focus:outline-2 focus:outline-[dodgerblue] focus:border-none text-white"
              />
            </div>
            {/* body */}
          </div>

          {/* body */}
          <div className="w-full flex gap-5">
            <div className="w-1/2 flex flex-col">
              <label
                className="text-[18px] font-[400] font-[Inter] text-white"
                htmlFor="category">
                <span>Category</span>
              </label>
              <select
                name="category"
                id="category"
                type="text"
                value={formData.category}
                onChange={handleChange}
                className="h-[40px] bg-[#374151] rounded-[5px] border-[1px] border-[#4b5563] indent-2.5 mt-2.5 text-[16px] font-[Inter] focus:outline-2 focus:outline-[dodgerblue] focus:border-none text-white">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>

            <div className="w-1/2 flex flex-col">
              <label
                className="text-[18px] font-[400] font-[Inter] text-white"
                htmlFor="image">
                <span>Product Image</span>
              </label>
              <input
                id="image"
                name="image"
                type="text"
                placeholder="Type Product image here"
                value={formData.image}
                onChange={handleChange}
                className="h-[40px] bg-[#374151] rounded-[5px] border-[1px] border-[#4b5563] indent-2.5 mt-2.5 text-[16px] font-[Inter] focus:outline-2 focus:outline-[dodgerblue] focus:border-none text-white"
              />
            </div>
          </div>
          {/* body */}

          {/* body */}
          <div className="w-full flex flex-col">
            <label
              className="text-[18px] font-[400] font-[Inter] text-white"
              htmlFor="description">
              <span>Description</span>
            </label>
            <textarea
              id="description"
              name="description"
              type="text"
              placeholder="write Product description here"
              value={formData.description}
              onChange={handleChange}
              className="w-full h-[130px] bg-transparent opacity-100 rounded-[5px] border-[1px] border-[#4b5563] pl-2.5 pr-2.5 mt-2.5 text-[16px] font-[Inter] focus:outline-2 focus:outline-[dodgerblue] focus:border-none text-white py-2"
            />
          </div>
          {/* body */}

          <div className="pb-5">
            <button
              type="submit"
              className="w-[200px] h-[50px] bg-[#2563eb] rounded-3xl hover:bg-blue-700 text-white font-[500] text-center">
              <span>+ Add new Product</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Popup;
