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
              className="bg-slate-700 text-white rounded-lg p-2 w-full mt-6 hover:bg-slate-900 transition duration-200 ease-in-out"
              type="submit"
            >
              Update Profile
            </button>
          </form>
        </form>
      </div>
    </>
  );
}
