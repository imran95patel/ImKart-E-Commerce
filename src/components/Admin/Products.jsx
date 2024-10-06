import Layout from "./Layout";
import React, { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([
    {
      title: "man's shirt slim blue",
      price: 4500,
      discount: 20,
      discription: "This is the shirt available in online market",
      image: "/Images/img1.jpg",
    },
    {
      title: "women's shirt denim black",
      price: 5500,
      discount: 15,
      discription: "This is the shirt available in online market",
      image: "/Images/img2.jpg",
    },
    {
      title: "women's shirt slim red",
      price: 6000,
      discount: 10,
      discription: "This is the shirt available in online market",
      image: "/Images/img3.jpg",
    },
    {
      title: " man's shirt jeans pink",
      price: 7000,
      discount: 5,
      discription: "This is the shirt available in online market",
      image: "/Images/img4.jpg",
    },
    {
      title: "man's shirt slim green",
      price: 4000,
      discount: 15,
      discription: "This is the shirt available in online market",
      image: "/Images/img5.jpg",
    },
    {
      title: "women's shirt denim white",
      price: 6500,
      discount: 10,
      discription: "This is the shirt available in online market",
      image: "/Images/img6.jpg",
    },
    {
      title: "man's shirt slim blue",
      price: 4500,
      discount: 20,
      discription: "This is the shirt available in online market",
      image: "/Images/img7.jpg",
    },
    {
      title: "women's shirt denim black",
      price: 5500,
      discount: 15,
      discription: "This is the shirt available in online market",
      image: "/Images/img8.jpg",
    },
    {
      title: "man's shirt slim red",
      price: 6000,
      discount: 10,
      discription: "This is the shirt available in online market",
      image: "/Images/img9.jpg",
    },
    {
      title: "women's shirt jeans pink",
      price: 7000,
      discount: 5,
      discription: "This is the shirt available in online market",
      image: "/Images/img10.jpg",
    },
    {
      title: "man's shirt slim green",
      price: 4000,
      discount: 15,
      discription: "This is the shirt available in online market",
      image: "/Images/img11.jpg",
    },
    {
      title: "women's shirt denim white",
      price: 6500,
      discount: 10,
      discription: "This is the shirt available in online market",
      image: "/Images/img12.jpg",
    },
    {
      title: "man's shirt slim blue",
      price: 4500,
      discount: 20,
      discription: "This is the shirt available in online market",
      image: "/Images/img13.jpg",
    },
    {
      title: "women's shirt denim black",
      price: 5500,
      discount: 15,
      discription: "This is the shirt available in online market",
      image: "/Images/img14.jpg",
    },
    {
      title: "man's shirt slim red",
      price: 6000,
      discount: 10,
      discription: "This is the shirt available in online market",
      image: "/Images/img15.jpg",
    },
    {
      title: "women's shirt jeans pink",
      price: 7000,
      discount: 5,
      discription: "This is the shirt available in online market",
      image: "/Images/img16.jpg",
    },
    {
      title: "man's shirt slim blue",
      price: 4500,
      discount: 20,
      discription: "This is the shirt available in online market",
      image: "/Images/img17.jpg",
    },
    {
      title: "women's shirt denim black",
      price: 5500,
      discount: 15,
      discription: "This is the shirt available in online market",
      image: "/Images/img18.jpg",
    },
    {
      title: "man's shirt slim red",
      price: 6000,
      discount: 10,
      discription: "This is the shirt available in online market",
      image: "/Images/img19.jpg",
    },
  ]);
  return (
    <Layout>
      <div>
        <h1 className="text-xl font-semibold mb- ">Products</h1>

        <div className="grid md:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-md">
              <img
                src={item.image}
                alt=""
                className="rounded-t-md h-[270px] w-full object-fitt"
              />
              <div className="p-4">
                <h1 className="text-md capitalize font-semibold">
                  {item.title}
                </h1>
                <p className="text-gray-500">{item.discription.slice(0, 50)}</p>
                <div className="flex gap-3 mt-3">
                  <p>₹{item.price - (item.price * item.discount) / 100}</p>
                  <del>₹ {item.price}</del>
                  <label className="text-gray-600">
                    ({item.discount}% off)
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
