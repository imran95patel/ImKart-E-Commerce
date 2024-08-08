const Admin = () => {
  return (
    <>
      <div className=" bg-gray-100 h-screen flex justify-center items-center ">
        <img src="/Images/admin.svg" alt="" className="w-96 h-96" />
        <div className="ml-6">
          <h1 className="text-4xl font-semibold mb-4"> Admin Console !</h1>
          <form action="" className="flex flex-col gap-4">
            <input
              required
              className="border p-4 bg-white rounded-md w-[450px] "
              type="text"
              placeholder="Enter admin Secret"
            />
            <button className="py-3 px-7 bg-green-300 w-fit text-white font-semibold rounded-md">
              Access Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Admin;
