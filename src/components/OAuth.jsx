import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { app } from "../firebase";
import { SignInSuccess } from "../redux/user/userSlice.js";
export default function OAuth() {
  const dispatch = useDispatch();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      // making a popup from google
      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      //use dispatch to set the user in the store
      dispatch(SignInSuccess(data));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-slate-600 text-white p-3 rounded-lg hover:bg-slate-800 transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Continue with Google
    </button>
  );
}
