import React, { useState } from "react";
import img from "/Images/Designer.png";

const Layout = ({ children }) => {
  const [size, setSize] = useState(280);
  const [accountMennu, setAccountMennu] = useState(false);

  return (
    <div>
      <aside
        className=" bg-indigo-500 fixed top-0 left-0 h-full"
        style={{ width: size, transition: "0.3s" }}
      ></aside>
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
  );
};

export default Layout;
