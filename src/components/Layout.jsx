import { Link } from "react-router-dom";

const Layout = ({ children }) => {
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
      path: "/contact-us",
    },
  ];
  return (
    <>
      <div className="h-[3000px]">
        <nav className="shadow-lg bg-slate-50 sticky top-0 left-0">
          <div className=" w-10/12 mx-auto flex items-center justify-between">
            <img src="/Images/logo.png" className="w-16 rounded-full" alt="" />
            <ul className="flex gap-4 items-center">
              {menus.map((menu, index) => (
                <li key={index}>
                  <Link
                    to={menu.path}
                    className="block py-6 text-center hover:bg-green-300 w-[100px] hover:text-white"
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
              <Link
                className="block py-6 text-center hover:bg-green-300 w-[100px] hover:text-white"
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
            </ul>
          </div>
        </nav>
        <div>{children}</div>
        <footer className="bg-orange-500 py-16">
          <div className=" w-10/12 mx-auto grid grid-cols-4 ">
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
      </div>
    </>
  );
};

export default Layout;
