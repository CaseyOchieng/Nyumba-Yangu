import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
export default function OAuth() {
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      // making a popup from google
      const result = await signInWithPopup(auth, provider);

      console.log(result.user);
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
