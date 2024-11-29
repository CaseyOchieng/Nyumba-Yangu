// This code sets up a simple React application with routing using react-router-dom
// The BrowserRouter component is used to wrap the application,
// enabling routing capabilities throughout the app.
// The Routes component is used to define multiple route paths and their corresponding components.
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import necessary components from react-router-dom
import About from "./pages/About"; // Import About component
import Home from "./pages/Home"; // Import Home component
import Profile from "./pages/Profile"; // Import Profile component
import Signin from "./pages/Signin"; // Import Signin component
import SignUp from "./pages/Signup"; // Import SigninUp component
// Define the main App component
export default function App() {
  return (
    // Wrap the entire application in a BrowserRouter to provide routing context
    <BrowserRouter>
      {/* Define the routes for the application */}
      <Routes>
        {/* Each Route component maps a URL path to a component */}
        <Route path="/" element={<Home />} />{" "}
        {/* The root path renders the Home component */}
        <Route path="/profile" element={<Profile />} />{" "}
        {/* The /profile path renders the Profile component */}
        <Route path="/about" element={<About />} />{" "}
        {/* The /about path renders the About component */}
        <Route path="/signin" element={<Signin />} />{" "}
        {/* The /signin path renders the Signin component */}
        <Route path="/signup" element={<SignUp />} />
        {/* The /signup path renders the SigninUp component */}
      </Routes>
    </BrowserRouter>
  );
}
