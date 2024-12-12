import { useSelector } from "react-redux";
import Header from "../components/Header";
export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <Header />
      <div className="max-w-lg mx-auto p-4">
        {/* Profile page content */}
        <h1 className="text-3xl font-semibold text-center my-7 text-slate-800">
          Profile
        </h1>
        {/* Form to update user information */}
        <form className="flex flex-col">
          {/* Form fields */}
          <form>
            {/* Avatar upload */}
            <img
              className="w-24 h-24 rounded-full object-cover cursor-pointer mx-auto mt-2 mb-6"
              src={currentUser.avatar}
              alt={currentUser.username}
            />
            {/* Form fields */}
            <input
              className="border-2 border-slate-300 rounded-lg p-2 w-full mb-6"
              id="username"
              type="text"
              placeholder="Username"
            />
            {/* Form fields */}
            <input
              className="border-2 border-slate-300 rounded-lg p-2 w-full"
              id="email"
              type="text"
              placeholder="Email"
            />
            {/* Form fields */}
            <input
              className="border-2 border-slate-300 rounded-lg p-2 w-full mt-6 "
              id="password"
              type="text"
              placeholder="Password"
            />
            {/* Submit button */}
            <button
              className="bg-slate-600 w-full mt-4  text-white p-3 rounded-lg hover:bg-slate-800 transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
            >
              Update Profile
            </button>
            {/* Cancel button */}
            <button
              className="bg-slate-600 w-full mt-4  text-white p-3 rounded-lg hover:bg-slate-800 transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
            >
              Create Listings
            </button>
          </form>

          <div className="flex flex-row justify-between ">
            {/* Delete account button */}
            <button
              className="bg-slate-600 w-full  mt-4  text-white p-3 rounded-lg hover:bg-red-800 transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
            >
              Delete Account
            </button>
            {/* ----------------------------------- */}
            <div className="flex flex-row justify-between m-2"></div>
            {/* Logout button */}
            <button
              onClick={() => {}}
              className="bg-slate-600 w-full mt-4  text-white p-3 rounded-lg hover:bg-blue-800 transition duration-200 ease-in-out"
            >
              Logout
            </button>
            {/* Delete account button */}
          </div>
        </form>
      </div>
    </>
  );
}
