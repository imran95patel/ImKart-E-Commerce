import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebaseAppConfig from "../Util/Firebase_config";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
const auth = getAuth(firebaseAppConfig);

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [accountMenu, setAccountMenu] = useState(false);

  const [session, setSession] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(false);
      }
    });
  }, []);
  console.log(session);

  const menus = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Products",
      path: "/products",
    },
    {
      label: "Category",
      path: "/category",
    },
    {
      label: "Contact Us",
      path: "/contact",
    },
  ];

  const mobileLink = (path) => {
    setOpen(false);
    navigate(path);
  };

  if (session === null)
    return (
      <div className="bg-gray-200 fixed top-0 left-0 h-full w-full flex justify-center items-center">
        <span className="relative flex h-6 w-6 ">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-6 w-6 bg-sky-500"></span>
        </span>
      </div>
    );
  return (
    <>
      <div>
        <nav className="shadow-lg bg-slate-50 sticky top-0 left-0">
          <div className=" w-10/12 mx-auto flex items-center justify-between">
            <img src="/Images/logo.png" className="w-16 rounded-full" alt="" />
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              <i className="ri-menu-5-line text-3xl"></i>
            </button>
            <ul className="md:flex gap-4 items-center hidden">
              {menus.map((menu, index) => (
                <li key={index}>
                  <Link
                    to={menu.path}
                    className="block py-6 text-center hover:bg-green-300  w-[100px] hover:text-white"
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}

              {!session && (
                <>
                  <Link
                    className="block py-6 text-center hover:bg-green-300 rounded-xl w-[100px] hover:text-white"
                    to="/login"
                  >
                    Login
                  </Link>

                  <Link
                    className="block py-3 px-8 text-md font-semibold rounded bg-blue-500 text-white text-center hover:bg-green-300  hover:text-white"
                    to="/signup"
                  >
                    Signup
                  </Link>
                </>
              )}
              {session && (
                <button
                  className="relative"
                  onClick={() => setAccountMenu(!accountMenu)}
                >
                  <img
                    src="/Images/Designer.png"
                    className=" w-10 h-10  rounded-full"
                    alt=""
                  />
                  {accountMenu && (
                    <div className="w-[150px] py-3 bg-white absolute top-12 right-0 shadow-lg shadow-green-400 animate__animated animate__fadeIn flex flex-col items-start ">
                      <Link
                        to="/profile"
                        className="hover:bg-gray-100 w-full text-left py-2 px-3 rounded"
                      >
                        <i className="ri-user-line mr-2"></i>
                        My Profile
                      </Link>
                      <Link
                        to="/cart"
                        className="hover:bg-gray-100 w-full text-left py-2 px-3 rounded"
                      >
                        <i className="ri-shopping-cart-line mr-2"></i>
                        Cart
                      </Link>

                      <button
                        className="hover:bg-gray-100 w-full text-left py-2 px-3 rounded"
                        onClick={() => signOut(auth)}
                      >
                        <i className="ri-logout-circle-r-line mr-2"></i>
                        LogOut
                      </button>
                    </div>
                  )}
                </button>
              )}
            </ul>
          </div>
        </nav>
        <div>{children}</div>
        <footer className="bg-orange-500 py-16">
          <div className=" w-10/12 mx-auto grid md:grid-cols-4 md:gap-0 gap-8">
            <div>
              <h1 className="text-white font-semibold text-2xl mb-3">
                Website Links
              </h1>
              <ul className="space-y-2 text-slate-50">
                {menus.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-white font-semibold text-2xl mb-3">
                Follow Us
              </h1>
              <ul className="space-y-2 text-slate-50">
                <li>
                  <Link to="/">Facebook</Link>
                </li>
                <li>
                  <Link to="/">Youtube</Link>
                </li>
                <li>
                  <Link to="/">Twitter</Link>
                </li>
                <li>
                  <Link to="/">Linkedin</Link>
                </li>
                <li>
                  <Link to="/">Instagram</Link>
                </li>
              </ul>
            </div>
            <div className="pr-8">
              <h1 className="text-white font-semibold text-2xl mb-3">
                Brand Details
              </h1>
              <p className="text-gray-100 mb-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                aspernatur mollitia nobis distinctio expedita eos facilis illum
              </p>
              <img
                src="/Images/logo.png"
                className="w-16 rounded-full"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-white font-semibold text-2xl mb-3">
                Contact Us
              </h1>
              <form className="space-y-4">
                <input
                  type="text"
                  name="fullname"
                  className="bg-white w-full rounded p-3 "
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="bg-white w-full rounded p-3 "
                  placeholder="Enter Email ID "
                  required
                />
                <textarea
                  required
                  name="message"
                  id=""
                  placeholder="Message"
                  className="bg-white w-full rounded p-3"
                  rows={3}
                ></textarea>

                <button className="bg-black text-white py-3 px-6 rounded">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </footer>

        <aside
          className="overflow-hidden bg-slate-900 shadow-lg fixed  top-0 left-0 w-[250px] h-full z-50"
          style={{ width: open ? 250 : 0, transition: "0.3s" }}
        >
          <div className="md:hidden flex flex-col p-8 gap-6">
            {menus.map((item, index) => (
              <button
                onClick={() => mobileLink(item.path)}
                key={index}
                className="text-white"
              >
                {item.label}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
};

export default Layout;
