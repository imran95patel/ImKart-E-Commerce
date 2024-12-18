import Layout from "./Layout";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([
    {
      title: "Men Self-Design Regular Fit Shirt",
      rating: 3.3,
      reviews: 1600,
      price: 1999,
      discount: 70,
      thumbnail: "/Images/img1.jpg",
    },
    {
      title: "Women Striped Oversized Fit Shirt",
      rating: 2.5,
      reviews: 1000,
      price: 1999,
      discount: 80,
      thumbnail: "/Images/img2.jpg",
    },
    {
      title: "Men Ribbed Regular Fit Shirt",
      rating: 4.0,
      reviews: 3100,
      price: 1899,
      discount: 61,
      thumbnail: "/Images/img3.jpg",
    },

    {
      title: "New Blue Shirts men",
      rating: 3.3,
      reviews: 1600,
      price: 1200,
      discount: 15,
      thumbnail: "/Images/img1.jpg",
    },
    {
      title: "New Yellow shade Shirts Woman",
      rating: 3.4,
      reviews: 1800,
      price: 1500,
      discount: 20,
      thumbnail: "/Images/img2.jpg",
    },
    {
      title: "New Cream Shirts Woman",
      rating: 4,
      reviews: 3500,
      price: 1000,
      discount: 10,
      thumbnail: "/Images/img3.jpg",
    },
    {
      title: "New chocolate Shirts men",
      rating: 4.5,
      reviews: 5000,
      price: 1300,
      discount: 16,
      thumbnail: "/Images/img4.jpg",
    },
    {
      title: "New Blue shade  Shirt men",
      rating: 4.8,
      reviews: 1500,
      price: 3000,
      discount: 25,
      thumbnail: "/Images/img5.jpg",
    },
    {
      title: "New red  Blue shade Shirts woman",
      rating: 4.2,
      reviews: 2500,
      price: 900,
      discount: 10,
      thumbnail: "/Images/img6.jpg",
    },
    {
      title: "New gray  Shirts men",
      rating: 4.8,
      reviews: 3800,
      price: 1600,
      discount: 20,
      thumbnail: "/Images/img7.jpg",
    },
    {
      title: "New golden  Shirts woman",
      rating: 3.8,
      reviews: 10000,
      price: 1250,
      discount: 15,
      thumbnail: "/Images/img8.jpg",
    },
    {
      title: "New chocolate   Shirts men",
      rating: 4.6,
      reviews: 3700,
      price: 800,
      discount: 10,
      thumbnail: "/Images/img9.jpg",
    },
    {
      title: "New formal Shirts men",
      rating: 3.9,
      reviews: 8000,
      price: 1050,
      discount: 15,
      thumbnail: "/Images/img10.jpg",
    },
    {
      title: "New formal blue Shirts men",
      rating: 4.3,
      reviews: 2800,
      price: 1800,
      discount: 25,
      thumbnail: "/Images/img11.jpg",
    },
    {
      title: "New formal  Shirts woman",
      rating: 3.9,
      reviews: 8000,
      price: 1500,
      discount: 15,
      thumbnail: "/Images/img12.jpg",
    },
  ]);

  const handleBuyNow = (product) => {
    alert(`Redirecting to buy "${product.title}"`);
  };

  const handleAddToCart = (product) => {
    alert(`"${product.title}" has been added to your cart.`);
  };

  return (
    <Layout>
      <div className="p-8 md:p-16">
        <h1 className="text-4xl font-bold text-center">All Products</h1>
        <p className="text-gray-400 text-center md:w-7/12 mx-auto mt-4 mb-16">
          Explore our latest collection with exciting offers.
        </p>

        <div className="grid md:grid-cols-3 gap-12 mx-auto">
          {products.map((item, index) => {
            const discountedPrice = Math.round(
              item.price - (item.price * item.discount) / 100
            );
            return (
              <div
                key={index}
                className="bg-white border shadow-lg rounded-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-screen h-72 object-contain rounded-t-md pt-2"
                />
                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>

                  {/* Rating */}
                  <div className="flex justify-center items-center gap-2 mt-2">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                      {item.rating} ★
                    </span>
                    <span className="text-gray-500 text-sm">
                      | {item.reviews / 1000}K
                    </span>
                  </div>

                  {/* Pricing Section */}
                  <div className="mt-3 text-gray-700">
                    <span className="text-xl font-bold">
                      ₹{discountedPrice}
                    </span>
                    <del className="text-sm ml-2 text-gray-500">
                      ₹{item.price}
                    </del>
                    <span className="ml-2 text-green-600 font-semibold">
                      ({item.discount}% off)
                    </span>
                  </div>

                  {/* Offer Price */}
                  <div className="text-sm text-green-600 font-semibold mt-2">
                    🌿 Offer Price: ₹{discountedPrice - 108}
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-around mt-4">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                      onClick={() => handleBuyNow(item)}
                    >
                      Buy Now
                    </button>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
