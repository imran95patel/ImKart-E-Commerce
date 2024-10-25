import Layout from "./Layout";
import firebaseAppConfig from "../Util/Firebase_config";
import { onAuthStateChanged, getAuth, updateProfile } from "firebase/auth";

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
const auth = getAuth(firebaseAppConfig);
const db = getFirestore(firebaseAppConfig);
const storage = getStorage();

const Profile = () => {
  const [uploading, setUploading] = useState(false);
  const [session, setSession] = useState(null);
  const [formValue, setFormValue] = useState({
    fullname: "",
    email: "",
    mobile: "",
  });

  const [addressValue, setAddressValue] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    userId: "  ",
  });

  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(false);
        navigate("/login");
      }
    });
  }, []);

  useEffect(() => {
    const req = async () => {
      if (session) {
        setFormValue({
          ...formValue,
          fullname: session.displayName,
          mobile: session.phoneNumber ? session.phoneNumber : "",
        });
        setAddressValue({
          ...addressValue,
          userId: session.uid,
        });

        //fetching address

        const col = collection(db, "addresses");
        const q = query(col, where("userId", "==", session.uid));
        const snapshort = await getDocs(q);
        snapshort.forEach((doc) => {
          console.log(doc.data());
        });
      }
    };
    req();
  }, [session]);

  // console.log(session);

  const handleChange = (e) => {
    e.preventDefault();
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const saveProfileInfo = async (e) => {
    e.preventDefault();
    const tmp = formValue;

    await updateProfile(auth.currentUser, {
      displayName: formValue.fullname,
      phoneNumber: formValue.mobile,
    });

    new Swal({
      icon: "success",
      title: "Profile Saved !",
    });
  };

  const handleAddrssValue = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;

    setAddressValue({
      ...addressValue,
      [name]: value,
    });
  };
  const saveAddress = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "addresses"), { address: addressValue });
      new Swal({
        icon: "success",
        title: "Address Saved !",
      });
    } catch (err) {
      new Swal({
        icon: "error",
        title: "Failed ",
        text: err.message,
      });
    }
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

  const setProfilePitcher = async (e) => {
    const input = e.target;
    const file = input.files[0];
    const fileNameArray = file.name.split(".");
    const ext = fileNameArray[fileNameArray.length - 1];
    const filename = Date.now() + "." + ext;
    const path = `picthers/${filename}`;
    const bucket = ref(storage, path);
    setUploading(true);
    const snapshort = await uploadBytes(bucket, file);
    const url = await getDownloadURL(snapshort.ref);
    await updateProfile(auth.currentUser, {
      photoURL: url,
    });
    setUploading(false);
    setSession({
      ...session,
      photoURL: url,
    });
  };
  return (
    <>
      <Layout>
        <div className="md:my-16 mx-auto shadow-`https://firebasestorage.googleapis.com/v0/b/mcart-5a93d.appspot.com/o/`lg rounded-md p-8 md:w-7/12 border">
          <div className="flex gap-3">
            <i className="ri-user-line text-3xl font-semibold "></i>
            <h1 className="text-3xl font-semibold ">Profile</h1>
          </div>
          <hr className="my-3" />
          <div className=" w-24 h-24 mx-auto relative mb-6">
            {uploading ? (
              <img src="/Images/loader.gif" alt="" />
            ) : (
              <img
                src={
                  session.photoURL ? session.photoURL : "Images/Designer.png"
                }
                alt=""
                className="rounded-full h-24 w-24 "
              />
            )}

            <input
              type="file"
              accept="image/*"
              className="absolute top-0 left-0  w-full h-full opacity-0"
              onChange={setProfilePitcher}
            />
          </div>
          <form
            className="grid md:grid-cols-2 md:gap-3"
            onSubmit={saveProfileInfo}
          >
            <div className=" flex flex-col gap-2">
              <label className="text-lg font-semibold "> Full name</label>
              <input
                required
                onChange={handleChange}
                type="text "
                name="fullname"
                className="p-2 border-gray-300 border rounded"
                value={formValue.fullname}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label className="text-lg font-semibold "> Email</label>
              <input
                disabled
                onChange={handleChange}
                required
                type="email "
                name="email"
                className="p-2 border-gray-300 border rounded"
                value={session.email}
              />
            </div>

            <div className=" flex flex-col gap-2">
              <label className="text-lg font-semibold ">Mobile </label>
              <input
                onChange={handleChange}
                required
                type="number "
                name="mobile"
                className="p-2 border-gray-300 border rounded"
                value={formValue.mobile}
              />
            </div>
            <div />

            <button
              type="submit"
              className="px-12 py-2 bg-rose-500 text-white rounded w-fit hover:bg-green-600 md:mt-0 mt-4"
            >
              <i className="ri-save-line mr-2"></i>
              Save
            </button>
          </form>
        </div>
        <div className="md:my-16 mx-auto shadow-`https://firebasestorage.googleapis.com/v0/b/mcart-5a93d.appspot.com/o/`lg rounded-md p-8 md:w-7/12 border">
          <div className="flex gap-3">
            <i className="ri-link-m text-3xl font-semibold "></i>
            <h1 className="text-3xl font-semibold ">Delivery Address</h1>
          </div>
          <hr className="my-3" />

          <form className="grid md:grid-cols-2 md:gap-3" onSubmit={saveAddress}>
            <div className=" flex flex-col gap-2  col-span-full">
              <label className="text-lg font-semibold ">
                Area/Street/vilage{" "}
              </label>
              <input
                onChange={handleAddrssValue}
                required
                type="text "
                name="address"
                className="p-2 border-gray-300 border rounded"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label className="text-lg font-semibold ">City </label>
              <input
                onChange={handleAddrssValue}
                required
                type="text "
                name="city"
                className="p-2 border-gray-300 border rounded"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label className="text-lg font-semibold ">State </label>
              <input
                onChange={handleAddrssValue}
                required
                type="text "
                name="state"
                className="p-2 border-gray-300 border rounded"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label className="text-lg font-semibold ">country </label>
              <input
                onChange={handleAddrssValue}
                required
                type="text "
                name="country"
                className="p-2 border-gray-300 border rounded"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label className="text-lg font-semibold ">Pincode </label>
              <input
                onChange={handleAddrssValue}
                required
                type="tenumberxt "
                name="pincode"
                className="p-2 border-gray-300 border rounded"
              />
            </div>

            <button
              type="submit"
              className="px-12 py-2 bg-rose-500 text-white rounded w-fit hover:bg-green-600 md:mt-0 mt-4"
            >
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
