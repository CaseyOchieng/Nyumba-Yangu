import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase.js";
import { SignInSuccess } from "../redux/user/userSlice.js";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      // making a popup from google
      const result = await signInWithPopup(auth, provider);
      // sending the user info to the backend.
      const response = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await response.json();
      //use dispatch to set the user in the store
      dispatch(SignInSuccess(data));
      // redirecting to the home page
      navigate("/");
    } catch (error) {
      console.error("Error during Google sign-in:", error.message, error.code);
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
