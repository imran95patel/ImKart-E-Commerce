import React from "react";
import Layout from "./Layout";

const Contact = () => {
  return (
    <Layout>
      <div>
        <header className="md:w-6/12 mx-auto md:my-16 md:shadow-lg bg-white  border rounded-xl">
          <img src="/Images/contactUs.jpg" alt="" className="rounded-lg" />
          <div className="p-8">
            <form className=" space-y-6 ">
              <div className="flex flex-col ">
                <label className="font-semibold text-2xl mb-1">Your Name</label>
                <input
                  required
                  type="text"
                  name=" fullname "
                  placeholder="Enter your name"
                  className="p-2 border-gray-300 rounded border-2"
                />
              </div>

              <div className="flex flex-col ">
                <label className="font-semibold text-2xl mb-1">Email id</label>
                <input
                  required
                  type="email"
                  name=" email"
                  placeholder="example@gmail.com"
                  className="p-2 border-gray-300 rounded border-2"
                />
              </div>
              <div className="flex flex-col ">
                <label className="font-semibold text-2xl mb-1">Massage</label>
                <textarea
                  required
                  name=" massage"
                  placeholder="Enter Your Massage Here"
                  className="p-2 border-gray-300 rounded border-2"
                  rows={4}
                />
              </div>

              <button className="py-3 px-10 bg-blue-500 rounded-lg text-white font-semibold hover:bg-rose-400 ">
                Get Quate
              </button>
            </form>
          </div>
        </header>
      </div>
    </Layout>
  );
};

export default Contact;
