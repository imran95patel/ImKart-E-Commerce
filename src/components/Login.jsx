import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebaseAppConfig from "../Util/Firebase_config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebaseAppConfig);
const Login = () => {
  const [passwordType, setPasswordType] = useState("password");

  const [formValue, setFromValue] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        formValue.email,
        formValue.password
      );
      navigate("/");
    } catch (err) {
      setError("Invalid credential provided");
    } finally {
      setLoader(false);
    }
  };

  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;

    setFromValue({
      ...formValue,
      [name]: value,
    });

    setError(null);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 md:h-screen md:px-8 md:overflow-hidden md:py-0 pb-10 animate__animated animate__fadeIn ">
        <div className="flex items-center ">
          <img
            src="./Images/signup2.jpg"
            alt=""
            className="w-full  rounded-xl "
          />
        </div>
        <div className="flex flex-col justify-center ml-6 md:pr-0 pr-4  md:mr-36  ">
          <h1 className="text-4xl font-bold">Login</h1>
          <p className="text-lg text-gray-600">Login to Start Shoping</p>
          <form className="mt-8 space-y-6 " onSubmit={login}>
            <div className="flex flex-col ">
              <label className="font-semibold text-2xl mb-1">Email id</label>
              <input
                onChange={handleChange}
                required
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="p-2 border-gray-300 rounded border-2"
              />
            </div>
            <div className="flex flex-col relative ">
              <label className="font-semibold text-2xl mb-1">Password</label>
              <input
                onChange={handleChange}
                required
                type={passwordType}
                name="password"
                placeholder="*************"
                className="p-2 border-gray-300 rounded border-2"
              />
              <button
                onClick={() =>
                  setPasswordType(
                    passwordType === "password" ? "text" : "password"
                  )
                }
                type="button"
                className="absolute top-11 right-4 hover:bg-blue-200 h-8 w-8 rounded-full hover:text-red-700"
              >
                {passwordType === "password" ? (
                  <i className="ri-eye-line"></i>
                ) : (
                  <i className="ri-eye-off-line"></i>
                )}
              </button>
            </div>

            {loader ? (
              <h1 className="text-lg font-semibold text-gray-600">
                Loading...
              </h1>
            ) : (
              <button className="py-3 px-10 bg-blue-500 rounded-lg text-white font-semibold hover:bg-rose-400 ">
                Login
              </button>
            )}
          </form>
          <div className="mt-2">
            {" "}
            Don't have an Account?{" "}
            <Link className="text-blue-600 font-semibold" to="/signup">
              Register Now{" "}
            </Link>
          </div>

          {error && (
            <div className="mt-2 bg-rose-400 p-3 shadow rounded font-semibold animate__animated animate__pulse flex justify-between items-center">
              <p>{error}</p>
              <button onClick={() => setError(null)}>
                <i className="ri-close-line"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
