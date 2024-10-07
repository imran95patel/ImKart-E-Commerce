import { useState } from "react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import firebaseAppConfig from "../Util/Firebase_config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(firebaseAppConfig);

const Signup = () => {
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [fromValue, setFromValue] = useState({
    fullname: " ",
    email: " ",
    password: "",
  });

  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  const signup = async (e) => {
    try {
      e.preventDefault();
      setLoader(true);
      await createUserWithEmailAndPassword(
        auth,
        fromValue.email,
        fromValue.password
      );
      await updateProfile(auth.currentUser, {
        displayName: fromValue.fullname,
      });
      navigate("/");
      console.log(user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoader(false);
    }
  };

  const handleOnChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;

    setFromValue({
      ...fromValue,
      [name]: value,
    });
    setError(null);
  };
  return (
    <>
      <div className="grid md:grid-cols-2 md:h-screen md:px-8 md:overflow-hidden md:py-0 pb-10 animate__animated animate__fadeIn ">
        <div className="flex items-center ">
          <img
            src="./Images/signup3.jpg"
            alt=""
            className="w-full  rounded-xl "
          />
        </div>

        <div className="flex flex-col justify-center ml-6 md:pr-0 pr-4  md:mr-36  ">
          <h1 className="text-4xl font-bold">New User</h1>
          <p className="text-lg text-gray-600">
            Create Your Account to Start Shoping
          </p>

          <form className="mt-8 space-y-6 " onSubmit={signup}>
            <div className="flex flex-col ">
              <label className="font-semibold text-2xl mb-1">Full Name</label>
              <input
                onChange={handleOnChange}
                type="text"
                required
                name="fullname"
                placeholder="Enter Your name"
                className="p-2 border-gray-300 rounded border-2"
              />
            </div>
            <div className="flex flex-col ">
              <label className="font-semibold text-2xl mb-1">Email id</label>
              <input
                onChange={handleOnChange}
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
                onChange={handleOnChange}
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
                Loading....
              </h1>
            ) : (
              <button className="py-3 px-10 bg-blue-500 rounded-lg text-white font-semibold hover:bg-rose-400 ">
                Signup
              </button>
            )}
          </form>
          <div className="mt-2">
            {" "}
            Already have an Account?{" "}
            <Link className="text-blue-600 font-semibold" to="/login">
              Signin{" "}
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

export default Signup;
