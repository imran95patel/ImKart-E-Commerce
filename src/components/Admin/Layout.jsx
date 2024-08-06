import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import img from "/Images/Designer.png";

const Layout = ({ children }) => {
  const [size, setSize] = useState(280);
  const [mobileSize, setMobileSize] = useState(0);

  const [accountMennu, setAccountMennu] = useState(false);
  const location = useLocation();

  const menus = [
    {
      lable: "Dashboard",
      icon: <i className="ri-home-4-line mr-2"></i>,
      link: "/admin/dashboard",
    },
    {
      lable: "Products",
      icon: <i className="ri-shopping-cart-fill mr-2"></i>,
      link: "/admin/products",
    },

    {
      lable: "Orders",
      icon: <i className="ri-shape-line mr-2"></i>,
      link: "/admin/orders",
    },
    {
      lable: "Payments",
      icon: <i className="ri-refund-2-line mr-2"></i>,
      link: "/admin/payments",
    },

    {
      lable: "Settings",
      icon: <i className="ri-settings-3-line mr-2"></i>,
      link: "/admin/settings",
    },
    {
      lable: "Logout",
      icon: <i className="ri-logout-circle-r-line mr-2"></i>,
      link: "/admin/logout",
    },
  ];

  return (
    <>
      {/* Desktop */}
      <div className="md:block hidden">
        <aside
          className=" bg-indigo-500 fixed top-0 left-0 h-full overflow-hidden"
          style={{ width: size, transition: "0.3s" }}
        >
          <div className=" flex flex-col">
            {menus.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className=" px-4 py-3 text-gray-100 text-[17.5px] hover:bg-green-300 hover:text-red-700 transition:0.3s"
                style={{
                  background:
                    location.pathname === item.link
                      ? " rgb(134 239 172) "
                      : "transparent",
                }}
              >
                {item.icon}
                {item.lable}
              </Link>
            ))}
          </div>
        </aside>
        <section
          className="bg-gray-300 h-screen "
          style={{ marginLeft: size, transition: "0.3s" }}
        >
          <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0">
            <div className="flex gap-4 items-center">
              <button
                className="bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8 border"
                onClick={() => setSize(size === 280 ? 0 : 280)}
              >
                <i className="ri-menu-2-line text-xl"></i>
              </button>

              <h1 className="text-xl font-semibold ">ImKart</h1>
            </div>
            <div>
              <button className="relative">
                <img
                  src={img}
                  className="w-10 h-10 rounded-full"
                  alt=""
                  onClick={() => setAccountMennu(!accountMennu)}
                />
                {accountMennu && (
                  <div className="absolute top-12 right-0 bg-white p-6 w-[200px]">
                    <div>
                      <h1 className="text-lg font-semibold">Er Imran</h1>
                      <p className="text-gray-500">example@gmail.com</p>
                      <div className="h-px bg-gray-200 my-4">
                        <button>
                          <i className="ri-logout-circle-r-line mr-2"></i>
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </nav>
          <div className="p-6">{children}</div>
        </section>
      </div>
      {/* Mobile */}
      <div className="md:hidden block">
        <aside
          className=" bg-indigo-500 fixed top-0 left-0 h-full overflow-hidden z-50 "
          style={{ width: mobileSize, transition: "0.3s" }}
        >
          <div className=" flex flex-col">
            <button
              onClick={() => setMobileSize(mobileSize === 0 ? 280 : 0)}
              className="text-left mx-4 mt-4"
            >
              <i className="ri-menu-line text-white text-xl"></i>
            </button>
            {menus.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className=" px-4 py-3 text-gray-100 text-[17.5px] hover:bg-green-300 hover:text-red-700 transition:0.3s"
                style={{
                  background:
                    location.pathname === item.link
                      ? " rgb(134 239 172) "
                      : "transparent",
                }}
              >
                {item.icon}
                {item.lable}
              </Link>
            ))}
          </div>
        </aside>
        <section className="bg-gray-300 h-screen ">
          <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0">
            <div className="flex gap-4 items-center">
              <button
                className="bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8 border"
                onClick={() => setMobileSize(mobileSize === 0 ? 280 : 0)}
              >
                <i className="ri-menu-2-line text-xl"></i>
              </button>

              <h1 className="text-xl font-semibold ">ImKart</h1>
            </div>
            <div>
              <button className="relative">
                <img
                  src={img}
                  className="w-10 h-10 rounded-full"
                  alt=""
                  onClick={() => setAccountMennu(!accountMennu)}
                />
                {accountMennu && (
                  <div className="absolute top-12 right-0 bg-white p-6 w-[200px]">
                    <div>
                      <h1 className="text-lg font-semibold">Er Imran</h1>
                      <p className="text-gray-500">example@gmail.com</p>
                      <div className="h-px bg-gray-200 my-4">
                        <button>
                          <i className="ri-logout-circle-r-line mr-2"></i>
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </nav>
          <div className="p-6">{children}</div>
        </section>
      </div>
    </>
  );
};

export default Layout;
