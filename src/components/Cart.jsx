import React, { useState } from "react";
import Layout from "./Layout";

const Cart = () => {
  const [products, setProducts] = useState([
    {
      title: "nokia smart Phone",
      price: 20000,
      discount: 10,
      image: "Images/img1.jpg",
    },
    {
      title: "Samsung smart Phone",
      price: 50000,
      discount: 15,
      image: "Images/img2.jpg",
    },
    {
      title: "fast track Watch ",
      price: 3000,
      discount: 5,
      image: "Images/img3.jpg",
    },
    {
      title: " smart TV",
      price: 15000,
      discount: 7,
      image: "Images/img4.jpg",
    },
    {
      title: "I phone 15 ",
      price: 60000,
      discount: 15,
      image: "Images/img6.jpg",
    },
  ]);
  return (
    <Layout>
      <div className="md:my-16 mx-auto md:w-7/12 bg-white shadow-lg rounded-md p-8">
        <div className="flex items-center gap-4">
          <i className="ri-shopping-cart-2-line text-4xl"></i>
          <h1 className="text-3xl font-semibold"> Cart</h1>
        </div>
        <hr className="mt-6 mb-6 " />
        <div className="space-y-12">
          {products.map((item, index) => (
            <div key={index} className="flex gap-4">
              <img
                src={item.image}
                alt=""
                className="w-[100px] border border-3  border-white shadow"
              />
              <div>
                <h1 className="font-semibold capitalize text-lg">
                  {item.title}
                </h1>
                <div className="flex flex-col gap-4">
                  <div className="space-x-2 ">
                    <label className="text-lg font-semibold">
                      ₹{item.price - (item.price * item.discount) / 100}
                    </label>
                    <del>₹{item.price}</del>
                    <label className="text-gray-500">
                      {item.discount}% Discount
                    </label>
                  </div>

                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg w-fit">
                    <i className="ri-delete-bin-6-line mr-2"></i>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="mt-6" />
        <div className="flex justify-between items-center mt-4">
          <h1 className="font-semibold text-2xl">Total: ₹80,000</h1>
          <button className="bg-green-500 text-white md:px-12 px-6 py-3 rounded-lg font-semibold hover:bg-slate-600  ">
            <i className="ri-shopping-bag-4-line mr-2 "></i>
            Buy Now
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
