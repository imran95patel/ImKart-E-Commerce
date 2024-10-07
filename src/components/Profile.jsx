import Layout from "./Layout";

const Profile = () => {
  return (
    <>
      <Layout>
        <div className="md:my-16 mx-auto shadow-lg rounded-md p-8 md:w-7/12 border">
          <div className="flex gap-3">
            <i className="ri-user-line text-3xl font-semibold "></i>
            <h1 className="text-3xl font-semibold ">Profile</h1>
          </div>
          <hr className="my-3" />
          <div className=" w-24 h-24 mx-auto relative mb-6">
            <img
              src="Images/Designer.png"
              alt=""
              className="rounded-full h-24 w-24 "
            />
            <input
              type="file"
              accept="image/*"
              className="absolute top-0 left-0  w-full h-full opacity-0"
            />
          </div>
          <form className="grid md:grid-cols-2 md:gap-3">
            <div className=" flex flex-col gap-2">
              <label className="text-lg font-semibold "> Full name</label>
              <input
                required
                type="text "
                name="fullname"
                className="p-2 border-gray-300 border rounded"
                value="Imran patel"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label className="text-lg font-semibold "> Email</label>
              <input
                required
                type="email "
                name="email"
                className="p-2 border-gray-300 border rounded"
                value="example@gmail.com"
              />
            </div>

            <div className=" flex flex-col gap-2">
              <label className="text-lg font-semibold ">Mobile </label>
              <input
                required
                type="number "
                name="mobile"
                className="p-2 border-gray-300 border rounded"
                value="456789123"
              />
            </div>
            <div />
            <div className=" flex flex-col gap-2  col-span-full">
              <label className="text-lg font-semibold ">
                Area/Street/vilage{" "}
              </label>
              <input
                required
                type="text "
                name="address"
                className="p-2 border-gray-300 border rounded"
                value="Pune Maharashtra"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label className="text-lg font-semibold ">City </label>
              <input
                required
                type="text "
                name="city"
                className="p-2 border-gray-300 border rounded"
                value="Solapur"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label className="text-lg font-semibold ">State </label>
              <input
                required
                type="text "
                name="state"
                className="p-2 border-gray-300 border rounded"
                value="Maharashtra"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label className="text-lg font-semibold ">Contry </label>
              <input
                required
                type="text "
                name="contry"
                className="p-2 border-gray-300 border rounded"
                value="India"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label className="text-lg font-semibold ">Pincode </label>
              <input
                required
                type="tenumberxt "
                name="pincode"
                className="p-2 border-gray-300 border rounded"
                value="411048"
              />
            </div>
            <button className="px-12 py-2 bg-rose-500 text-white rounded w-fit hover:bg-green-600">
              <i className="ri-save-line mr-2"></i>
              Save
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
