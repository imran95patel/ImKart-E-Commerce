import Layout from "./Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([
    {
      title: "New Blue Shirts men",
      price: 1200,
      discount: 15,
      thumbnail: "/Images/img1.jpg",
    },
    {
      title: "New Yellow shade Shirts Woman",
      price: 1500,
      discount: 20,
      thumbnail: "/Images/img2.jpg",
    },
    {
      title: "New Cream Shirts Woman",
      price: 1000,
      discount: 10,
      thumbnail: "/Images/img3.jpg",
    },
    {
      title: "New chocolate Shirts men",
      price: 1300,
      discount: 16,
      thumbnail: "/Images/img4.jpg",
    },
    {
      title: "New Blue shade  Shirt men",
      price: 3000,
      discount: 25,
      thumbnail: "/Images/img5.jpg",
    },
    {
      title: "New red  Blue shade Shirts woman",
      price: 900,
      discount: 10,
      thumbnail: "/Images/img6.jpg",
    },
    {
      title: "New gray  Shirts men",
      price: 1600,
      discount: 20,
      thumbnail: "/Images/img7.jpg",
    },
    {
      title: "New golden  Shirts woman",
      price: 1250,
      discount: 15,
      thumbnail: "/Images/img8.jpg",
    },
    {
      title: "New chocolate   Shirts men",
      price: 800,
      discount: 10,
      thumbnail: "/Images/img9.jpg",
    },
    {
      title: "New formal Shirts men",
      price: 1050,
      discount: 15,
      thumbnail: "/Images/img10.jpg",
    },
    {
      title: "New formal blue Shirts men",
      price: 1800,
      discount: 25,
      thumbnail: "/Images/img11.jpg",
    },
    {
      title: "New formal  Shirts woman",
      price: 1500,
      discount: 15,
      thumbnail: "/Images/img12.jpg",
    },
  ]);
  return (
    <>
      <Layout>
        <div>
          <div className="md:p-16 p-8">
            <h1 className="text-4xl font-bold text-center"> All Products</h1>
            <p className="text-gray-400 text-center md:w-7/12 mx-auto mt-4 mb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, sit facere facilis aliquid, exercitationem nemo nam
              magni perspiciatis ad consectetur nisi .
            </p>
            <div className=" md:w-12/12  mx-auto grid md:grid-cols-4 gap-12">
              {products.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg border hover:shadow-red-500"
                >
                  <img src={item.thumbnail} />
                  <div className="p-4">
                    <h1 className="text-lg font-semibold">{item.title}</h1>
                    <div className="space-x-2">
                      <label className="font-semibold text-lg">
                        {" "}
                        {item.price - (item.price * item.discount) / 100}
                      </label>
                      <del>₹{item.price}</del>
                      <label className="text-gray-600 ">
                        ({item.discount})%
                      </label>
                    </div>
                    <button className="border py-2 w-full bg-green-400 hover:bg-orange-400 rounded text-white mt-4">
                      Buy Now
                    </button>
                    <button className="border py-2 w-full bg-rose-500 hover:bg-orange-400 rounded text-white mt-2">
                      <i className="ri-shopping-cart-fill mr-4"></i>
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Products;
